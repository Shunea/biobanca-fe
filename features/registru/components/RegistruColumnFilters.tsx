import useGetPacients from "@/hooks/queries/useGetPacients";
import { Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { utils, writeFile } from "xlsx";
import { Registru } from "../types";
import { TableFilterButtons } from "@/features/registru/components/TableFilterButtons";

interface RegistruColumnFiltersProps {
  pacients: Registru[] | undefined;
  handleClickOpen: () => void;
}

export const RegistruColumnFilters: React.FC<RegistruColumnFiltersProps> = ({
  pacients,
  handleClickOpen,
}) => {
  const { refetch } = useGetPacients({
    enabled: false,
    refetchOnWindowFocus: false,
  });

  const handleExportExcel = () => {
    if (pacients) {
      const newBook = utils.book_new();
      const jsonToSheet = utils.json_to_sheet(pacients);

      utils.book_append_sheet(newBook, jsonToSheet, "registru");
      writeFile(newBook, "registru.xlsx");
    }
  };

  const handleExportExcelTotal = async () => {
    const response = await refetch();

    if (response && response.data) {
      const newBook = utils.book_new();
      const jsonToSheet = utils.json_to_sheet(response.data.data.result[0]);

      utils.book_append_sheet(newBook, jsonToSheet, "registru-total");
      writeFile(newBook, "registru-total.xlsx");
    }
  };

  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        background: "#e7e7e7",
        borderBottom: "1px solid #000000",
        alignItems: "center",
        py: "16px",
        mt: 0,
        width: "100%",
        border: "1px solid #000",
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
      }}
    >
      <Typography fontSize={14} fontWeight={700} ml={8}>
        Caută în baza filtrelor:
      </Typography>
      <Button
        style={{
          background: "#ffffff",
          textTransform: "capitalize",
        }}
        onClick={handleClickOpen}
      >
        <Image src="/select-filter.svg" alt="filtru" width={24} height={24} />
        <Typography color="text.primary" sx={{ ml: 1 }}>
          Selectează filtre
        </Typography>
      </Button>
      <TableFilterButtons />
      <Button
        style={{
          background: "#1F6E43",
          textTransform: "capitalize",
        }}
        onClick={handleExportExcel}
      >
        Generează Excel - {pacients?.length}
      </Button>
      <Button
        style={{
          background: "#1F6E43",
          paddingInline: "15px",
          textTransform: "capitalize",
        }}
        onClick={handleExportExcelTotal}
      >
        Generează Excel - total
      </Button>
    </Stack>
  );
};
