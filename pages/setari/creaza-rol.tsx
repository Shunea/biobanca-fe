import { Button } from "@/components/Elements";
import { InputField, SelectField } from "@/components/Form";
import { AutoComplete } from "@/components/Form/AutoComplete";
import { useCreateUser } from "@/hooks/mutations/useCreateUser";
import useIMSP from "@/hooks/queries/useIMSP";
import useUser from "@/hooks/queries/useUser";
import useTrimisDe from "@/hooks/queries/useTrimisDe";
import { Dialog, Divider, Grid, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

type FormData = {
  username: string;
  imsp: { value: number; label: string };
  trimis_de: { value: number; label: string };
  rol: string;
};

const adminOptions = [
  {
    label: "Admin",
    value: "ADMIN",
  },
  {
    label: "Operator",
    value: "OPERATOR",
  },
  {
    label: "Student",
    value: "STUDENT",
  },
];

const superAdminOptions = [
  {
    label: "Super Admin",
    value: "SUPER_ADMIN",
  },
  ...adminOptions,
];

interface CreazaRolProps {
  open: boolean;
}

const CreazaRol: React.FC<CreazaRolProps> = ({ open }) => {
  const { register, handleSubmit, watch, control, formState } =
    useForm<FormData>();
  const watchRol = watch("rol");

  const { status, data } = useUser();
  const { status: imspStatus, data: imspData } = useIMSP();
  const imspOptions:
    | {
        value: number;
        label: string;
      }[]
    | undefined = [];
    const { status: trimisDeStatus, data: trimisDeData } = useTrimisDe();
    const trimisDeOptions = trimisDeData?.map((trimisDe) => ({
      value: trimisDe.name,
      label: trimisDe.name,
    }));
    console.log(trimisDeOptions)

  const [showDialog, setShowDialog] = useState(false);

  const { mutate, error, isLoading } = useCreateUser();

  const onSubmit = handleSubmit((data) => {
    mutate({
      ...data,
      imsp: data.imsp.value,
    });
    setShowDialog(true);
  });

  const closeInvitation = () => {
    setShowDialog(false);
  };

  let role = "";

  if (status === "success" && data) {
    const user = data.data;
    role = user.rol;

    if (imspStatus === "success" && imspData) {
      if (role === "SUPER_ADMIN") {
        const options = imspData.map((item) => ({
          value: item.id,
          label: item.name,
        }));
        if (watchRol === "SUPER_ADMIN") {
          const newOpt = options.filter((option) => option.value === 42);
          imspOptions.push(...newOpt);
        } else {
          imspOptions.push(...options);
        }
      } else {
        const imsp = imspData.data.result[0].find(
          (imsp) => imsp.id === user.imsp.id
        );

        if (imspOptions && imsp) {
          const imspOption = {
            value: imsp.id,
            label: imsp.name,
          };

          imspOptions.push(imspOption);
        }
      }
    }
  }

  return (
    <Stack
      sx={{ pt: 4, pb: 6, m: "auto", maxWidth: open ? "1050px" : "1250px" }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography
          variant="h5"
          fontWeight={600}
          sx={{
            color: "#076AC9",
            marginBottom: 2,
          }}
        >
          Crează rol
        </Typography>
      </Stack>
      <Divider variant="middle" sx={{ ml: "1px", mb: 6 }} />

      <form noValidate id="creaza-rol" onSubmit={onSubmit}>
        <Grid container item xs={6} rowSpacing={2}>
          <Grid item xs={6}>
            <SelectField
              options={
                role === "SUPER_ADMIN" ? superAdminOptions : adminOptions
              }
              label="Rol utilizator"
              error={formState.errors.rol}
              registration={register("rol")}
              className="margin_label"
              style={{
                marginTop: "8px",
                width: "80%",
              }}
            />
          </Grid>
          <Grid item xs={6} mt={1}>
            <Controller
              name="imsp"
              control={control}
              rules={{ required: "Acest câmp este obligatoriu" }}
              render={({ field }) => (
                <AutoComplete
                  id="imsp-autocomplete"
                  label="IMSP"
                  options={imspOptions}
                  field={field}
                  width={300}
                />
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <InputField
              type="text"
              label="Adresa de Email"
              error={formState.errors.username}
              registration={register("username")}
              style={{
                marginTop: "8px",
                width: "80%",
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <SelectField
              options={trimisDeStatus === "success" ? trimisDeOptions! : []}
              label="Trimis de"
              error={formState.errors.rol}
              registration={register("trimis_de")}
              style={{
                width: "100%",
              }}
            />
          </Grid>
        </Grid>
      </form>

      <Stack direction="row" justifyContent="center" mt={2}>
        <Button
          variant={["primary", "end"]}
          type="submit"
          form="creaza-rol"
          disabled={isLoading}
        >
          Trimite invitație
        </Button>
      </Stack>

      <Dialog open={showDialog}>
        <div
          style={{
            padding: "20px",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <Typography fontSize={18}>
            {error?.response?.status === 302
              ? "Utilizatorul există deja!"
              : error?.response?.status === 500
              ? "A apărut o eroare. Vă rugăm să încercați din nou."
              : "Invitația a fost trimisă cu succes!"}
          </Typography>
          <button
            style={{
              fontFamily: "Montserrat",
              fontSize: "16px",
              boxShadow: "0px 0px 4px rgb(0 0 0 / 25%)",
              cursor: "pointer",
              width: "77px",
              padding: "9px 0",
            }}
            onClick={closeInvitation}
          >
            Bine
          </button>
        </div>
      </Dialog>

      <Divider variant="middle" sx={{ mb: 3 }} />
    </Stack>
  );
};

export default CreazaRol;
