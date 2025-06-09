import useDeletePacient from "@/hooks/mutations/useDeletePacient";
import useGetPacient from "@/hooks/queries/useGetPacient";
import { usePacientStore } from "@/stores/pacient";
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Divider,
  Popover,
  Stack,
} from "@mui/material";
import { Row } from "@tanstack/react-table";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import ReactToPrint from "react-to-print";
import shallow from "zustand/shallow";
import { FormularPacientPDF } from "../components/FormularPacientPDF";
import { Registru } from "../types";

interface SettingsButtonProps {
  row: Row<Registru>;
}

const SettingsButton: React.FC<SettingsButtonProps> = ({ row }) => {
  const router = useRouter();
  const componentRef = useRef(null);
  const [clicked, setClicked] = useState(false);
  const { data } = useGetPacient(row.original.id, {
    enabled: !!row.original.id && clicked,
  });
  const { mutate } = useDeletePacient();
  const { setPacient, setPreviewPacient } = usePacientStore(
    (state) => ({
      setPacient: state.setPacient,
      setPreviewPacient: state.setPreviewPacient,
    }),
    shallow
  );

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>();
  const [openDialog, setOpenDialog] = useState(false);
  const [openDialog2, setOpenDialog2] = useState(false);

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleClickOpen2 = () => {
    setOpenDialog2(true);
  };

  const handleCloseDialog2 = () => {
    setOpenDialog2(false);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setClicked(true);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const handleViewPacient = () => {
    if (data) {
      const obj = data.data.result;

      setPreviewPacient(obj);

      router.push("/formulare/pacient/previzualizare/1");
    }
  };

  const handleEditPacient = () => {
    if (data) {
      const obj = data.data.result;

      setPacient(obj);

      router.push("/formulare/pacient/editeaza/1");
    }
  };

  const handleDeletePacient = () => {
    mutate(row.original.id);
    handleCloseDialog2();
    handleCloseDialog();
  };

  return (
    <>
      <button key={row.original.id} onClick={(e) => handleClick(e)}>
        <div className="circle_dots" />
      </button>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Stack direction="row" sx={{ px: 2, py: 2 }}>
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              alignSelf: "center",
              backgroundColor: "#076AC9",
              height: 40,
              width: "1.5px",
            }}
          />
          <ReactToPrint
            trigger={() => (
              <button>
                <Image src="/PDF.svg" alt="download" width={28} height={28} />
              </button>
            )}
            content={() => componentRef.current}
          />
          <button onClick={handleViewPacient}>
            <Image src="/view-registru.svg" alt="view" width={28} height={28} />
          </button>
          <button onClick={handleEditPacient}>
            <Image src="/edit-registru.svg" alt="edit" width={28} height={28} />
          </button>
          <button onClick={handleClickOpen}>
            <Image
              src="/delete-registru.svg"
              alt="delete"
              width={28}
              height={28}
            />
          </button>
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              alignSelf: "center",
              backgroundColor: "#076AC9",
              height: 40,
              width: "1.5px",
            }}
          />
        </Stack>
      </Popover>

      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="delete-dialog-title"
        aria-describedby="delete-dialog-description"
      >
        <DialogTitle id="delete-dialog-title">
          Doriti sa stergeti pacientul?
        </DialogTitle>
        <DialogActions>
          <Button
            sx={{
              color: "red",
            }}
            onClick={handleCloseDialog}
          >
            Nu
          </Button>
          <Button
            sx={{
              color: "green",
            }}
            onClick={handleClickOpen2}
            autoFocus
          >
            Da
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={openDialog2}
        onClose={handleCloseDialog2}
        aria-labelledby="delete-confirm-dialog-title"
        aria-describedby="delete-confirm-dialog-description"
      >
        <DialogTitle id="delete-confirm-dialog-title">
          Sunteti sigur ca doriti sa stergeti pacientul?
        </DialogTitle>
        <DialogActions>
          <Button
            sx={{
              color: "red",
            }}
            onClick={handleCloseDialog2}
          >
            Nu
          </Button>
          <Button
            sx={{
              color: "green",
            }}
            onClick={handleDeletePacient}
            autoFocus
          >
            Da
          </Button>
        </DialogActions>
      </Dialog>

      <div style={{ display: "none" }}>
        {data ? (
          <FormularPacientPDF item={data.data.result} ref={componentRef} />
        ) : null}
      </div>
    </>
  );
};

export default SettingsButton;
