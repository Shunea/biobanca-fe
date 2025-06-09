import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Stack,
  Tooltip,
} from "@mui/material";
import { UseMutationResult } from "@tanstack/react-query";
import { AxiosError } from "axios";
import Image from "next/image";
import { useState } from "react";
import ClasificatorDialog from "./ClasificatorDialog";

interface ClasificatorActionsProps<T> {
  code?: boolean;
  data: T;
  mutation?: UseMutationResult<T, AxiosError, T>;
  onSubmit?: (data: T) => void;
  handleDelete: () => void;
}

const ClasificatorActions = <T extends object>({
  code,
  data,
  mutation,
  onSubmit,
  handleDelete,
}: ClasificatorActionsProps<T>) => {
  const [open, setOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [openDialog2, setOpenDialog2] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleClickOpenDialog2 = () => {
    setOpenDialog2(true);
  };

  const handleCloseDialog2 = () => {
    setOpenDialog2(false);
  };

  return (
    <>
      <Stack direction="row" justifyContent="center" spacing={2}>
        <Tooltip title="Editează" placement="top">
          <button style={{ position: "relative" }} onClick={handleOpen}>
            <Image src="/Edit.svg" alt="edit" width={15} height={15} />
          </button>
        </Tooltip>

        <Tooltip title="Șterge" placement="top">
          <button
            onClick={handleClickOpenDialog}
            style={{ position: "relative" }}
          >
            <Image src="/Delete.svg" alt="edit" width={15} height={15} />
          </button>
        </Tooltip>
      </Stack>

      <ClasificatorDialog<T>
        code={code}
        mutation={mutation}
        open={open}
        values={data}
        handleClose={handleClose}
        onSubmit={onSubmit}
      />

      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="delete-dialog-title"
        aria-describedby="delete-dialog-description"
      >
        <DialogTitle id="delete-dialog-title">
          Doriti sa stergeti clasificatorul?
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
            onClick={handleClickOpenDialog2}
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
          Sunteti sigur ca doriti sa stergeti clasificatorul?
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
            onClick={handleDelete}
            autoFocus
          >
            Da
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ClasificatorActions;
