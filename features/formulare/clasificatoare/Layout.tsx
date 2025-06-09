import { Button } from "@/components/Elements";
import CustomTable from "@/features/registru/components/CustomTable";
import { useSidebarStore } from "@/stores/sidebar";
import { LinkBehaviour } from "@/styles/theme";
import { Breadcrumbs, Divider, Link, Stack } from "@mui/material";
import { UseMutationResult } from "@tanstack/react-query";
import { ColumnDef } from "@tanstack/react-table";
import { AxiosError } from "axios";
import { useState } from "react";
import { utils, writeFile } from "xlsx";
import ClasificatorDialog from "./ClasificatorDialog";

interface LayoutProps<T> {
  data: T[];
  columns: ColumnDef<T, any>[];
  code?: boolean;
  mutation?: UseMutationResult<T, AxiosError, T>;
  title: string;
  onSubmit?: (data: T) => void;
}

const Layout = <T extends object>({
  data,
  columns,
  code,
  mutation,
  title,
  onSubmit,
}: LayoutProps<T>) => {
  const [openDialog, setOpenDialog] = useState(false);
  const open = useSidebarStore((state) => state.sidebarOpen);

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  const handleDownloadExcel = () => {
    const newBook = utils.book_new();
    const jsonToSheet = utils.json_to_sheet(data);

    utils.book_append_sheet(newBook, jsonToSheet, "clasificator" + title);
    writeFile(newBook, `clasificator-${title}.xlsx`);
  };

  return (
    <Stack sx={{ pt: 4, pb: 6, pl: 6 }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{
          maxWidth: open ? "1050px" : "1250px",
        }}
      >
        <Breadcrumbs
          sx={{ color: "#a3a3a3", fontSize: "24px", fontWeight: 400, mb: 2 }}
        >
          <Link
            component={LinkBehaviour}
            underline="none"
            color="text.primary"
            href="/formulare"
            sx={{
              "&:hover": {
                color: "#343d70",
              },
            }}
          >
            Formulare
          </Link>
          <Link
            component={LinkBehaviour}
            underline="none"
            color="text.primary"
            href="/formulare/clasificatoare"
            sx={{
              "&:hover": {
                color: "#343d70",
              },
            }}
          >
            Clasificator
          </Link>
          <Link
            component={LinkBehaviour}
            underline="none"
            color="action.active"
            href="/formulare"
            sx={{
              fontWeight: 600,
            }}
          >
            {title}
          </Link>
        </Breadcrumbs>

        <Stack direction="row" alignItems="center" spacing={2}>
          <Button  size="small" onClick={handleClickOpen}
          style={{background:"#076AC9", color:"#fff" ,width:"80px", height:"28px"}}>
            Adaugă
          </Button>
          <Button size="small" onClick={handleDownloadExcel}
          style={{background:"#076AC9", color:"#fff" ,width:"80px", height:"28px"}}>
            Descarcă
          </Button>
        </Stack>
      </Stack>
      <Divider variant="middle" sx={{ ml: "1px", mr: "110px", mb: 6 }} />

      <CustomTable<T> initialData={data} columns={columns} open={open} />

      <ClasificatorDialog
        code={code}
        mutation={mutation}
        open={openDialog}
        handleClose={handleClose}
        onSubmit={onSubmit}
      />
    </Stack>
  );
};

export default Layout;
