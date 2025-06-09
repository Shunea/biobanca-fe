import { InputField } from "@/components/Form";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import { UseMutationResult } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { Path, UnPackAsyncDefaultValues, useForm } from "react-hook-form";

interface ClasificatorDialogProps<T> {
  code?: boolean;
  mutation?: UseMutationResult<T, AxiosError, T>;
  open: boolean;
  values?: T;
  handleClose: () => void;
  onSubmit?: (data: T) => void;
}

const ClasificatorDialog = <T extends { createdAt?: string }>({
  code = false,
  mutation,
  open,
  values,
  handleClose,
  onSubmit,
}: ClasificatorDialogProps<T>) => {
  const { register, handleSubmit, reset, control, formState } = useForm<T>({
    values,
  });

  const onFormSubmit = (data: T) => {
    if (data.createdAt) delete data.createdAt;
    mutation?.mutate(data, {
      onSuccess: () => {
        reset();
        handleClose();
      },
    });
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <Stack
        direction="row"
        justifyContent="end"
        sx={{
          maxHeight: "39px",
          mr: "12px",
          mt: -1,
          cursor: "pointer",
        }}
        onClick={handleClose}
      >
        <Typography color="#a3a3a3" fontSize={32} fontWeight={600}>
          x
        </Typography>
      </Stack>

      <DialogTitle
        sx={{
          color: "#45CEC6",
          fontSize: "24px",
          fontWeight: 600,
          mt: 3,
          textAlign: "center",
          textTransform: "uppercase",
        }}
      >
        {values ? "Modifica" : "Adaugă câmp"}
      </DialogTitle>

      <Divider variant="middle" sx={{ mx: "65px" }} />

      <DialogContent sx={{ maxWidth: "384px", px: 6, py: 2 }}>
        <InputField
          type="text"
          label="Nume"
          error={formState.errors["name"]}
          registration={register("name" as Path<UnPackAsyncDefaultValues<T>>)}
          style={{ marginBottom: "20px" }}
        />
        {code && (
          <InputField
            type="number"
            label="Cod"
            error={formState.errors["code"]}
            registration={register(
              "code" as Path<UnPackAsyncDefaultValues<T>>,
              {
                valueAsNumber: true,
              }
            )}
            style={{ marginBottom: "20px" }}
          />
        )}
      </DialogContent>

      <DialogActions sx={{ justifyContent: "center", mb: 3 }}>
        <Button
          disableRipple
          color="primary"
          sx={{
            background: "#45CEC6",
            p: "10px 60px",
            "&:hover": {
              background: "#45CEC6",
            },
          }}
          onClick={() => {
            handleSubmit(onSubmit ? onSubmit : onFormSubmit)();
            if (onSubmit) {
              handleClose();
            }
          }}
        >
          Salvează
        </Button>
      </DialogActions>
      <Box
        sx={{
          background: "#45CEC6",
          borderRadius: "5px",
          mt: 1,
          width: "100%",
          height: "13px",
        }}
      />
    </Dialog>
  );
};

export default ClasificatorDialog;
