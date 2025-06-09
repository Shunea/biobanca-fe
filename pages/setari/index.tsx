import { Button } from "@/components/Elements";
import { InputField } from "@/components/Form";
import { UpdateUserDTO } from "@/features/auth/api/updateAccount";
import { useUpdateAccount } from "@/hooks/mutations/useUpdateAccount";
import useUser from "@/hooks/queries/useUser";
import { Dialog, Divider, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CSSProperties, useState } from "react";
import { useForm } from "react-hook-form";

const eyeOpen = "/eye-svgrepo-com-1.svg";
const eyeClosed = "/eye-off-svgrepo-com-1.svg";

const inputStyle: CSSProperties = {
  marginTop: "8px",
  width: "80%",
};

type FormData = {
  id: string;
  name: string;
  lastname: string;
  imsp: string;
  phone: string;
  rol: string;
  username: string;
  active: boolean;
  password: string;
  oldPassword: string;
};

interface SetariProps {
  open: boolean;
}

const Setari: React.FC<SetariProps> = ({ open }) => {
  const [edit, setEdit] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const [oldPasswordShown, setOldPasswordShown] = useState(false);
  const { status, data } = useUser();
  const {
    register,
    handleSubmit,
    clearErrors,
    setError,
    formState: { dirtyFields, errors },
  } = useForm<FormData>({
    values: data
      ? {
          id: data.data.id.toString(),
          name: data.data.name,
          lastname: data.data.lastname,
          imsp: data.data.imsp.name,
          phone: data.data.phone,
          rol: data.data.rol.replace("_", " "),
          username: data.data.username,
          active: data.data.active,
          password: "",
          oldPassword: "",
        }
      : undefined,
  });
  const router = useRouter();
  const { mutate, isSuccess, isError } = useUpdateAccount();

  const onSubmit = (formData: FormData) => {
    const updatedUser: UpdateUserDTO = {
      id: formData.id,
      active: formData.active,
    };

    if (dirtyFields && Object.keys(dirtyFields).length > 0) {
      if (dirtyFields.name) {
        updatedUser.name = formData.name;
      }
      if (dirtyFields.lastname) {
        updatedUser.lastname = formData.lastname;
      }
      if (dirtyFields.username) {
        updatedUser.username = formData.username;
      }
      if (dirtyFields.phone) {
        updatedUser.phone = formData.phone;
      }
      if (dirtyFields.password) {
        updatedUser.password = formData.password;
      }
      if (dirtyFields.oldPassword) {
        updatedUser.oldPassword = formData.oldPassword;
      }
    } else {
      return;
    }

    mutate(updatedUser, {
      onError: (error) => {
        if ((error as any).response?.data?.errCode === 400) {
          setError("oldPassword", {
            type: "manual",
            message: "Parola veche nu este corectă",
          });
        }
        setShowDialog(true);
      },
      onSuccess: () => {
        setShowDialog(true);
        setEdit(false);
        clearErrors();
      },
    });
  };

  const closeModification = () => {
    setShowDialog(false);
  };

  return (
    <Stack sx={{ pt: 4, pb: 6, pl: 6 }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          maxWidth: open ? "1050px" : "1250px",
        }}
      >
        <Typography
          variant="h5"
          fontWeight={600}
          sx={{
            color: "#076AC9",
            marginBottom: 2,
          }}
        >
          Setări date personale
        </Typography>

        <Stack direction="row" alignItems="center" spacing={2}>
          {edit && (
            <Button
            style={{background:"#076AC9", color:"#fff" ,width:"80px", height:"28px"}}
              size="small"
              onClick={() => {
                setEdit(false);
                clearErrors();
              }}
            >
              Anulează
            </Button>
          )}
          <Button
            style={{background:"#076AC9", color:"#fff" ,width:"80px", height:"28px"}}
            key={edit ? "save" : "edit"}
            size="small"
            type={edit ? "submit" : "button"}
            form={edit ? "edit" : ""}
            onClick={() => {
              if (!edit) {
                setEdit(true);
              }
            }}
          >
            {edit ? "Salvează" : "Modifică"}
          </Button>
          {status === "success" &&
            (data?.data.rol === "SUPER_ADMIN" ||
              data?.data.rol === "ADMIN") && (
              <Button
                style={{background:"#076AC9", color:"#fff" ,width:"90px", height:"28px"}}
                size="small"
                onClick={() => router.push("/setari/creaza-rol")}
              >
                Creează Rol
              </Button>
            )}
        </Stack>
      </Stack>
      <Divider variant="middle" sx={{ ml: "1px", mr: "110px", mb: 6 }} />

      <form
        noValidate
        id="edit"
        onSubmit={(e) => {
          if (edit) {
            handleSubmit(onSubmit)(e);
          }
        }}
      >
        <Grid container item xs={6} rowSpacing={1}>
          <Grid item xs={6}>
            <InputField
              disabled
              type="text"
              label="Rol utilizator"
              placeholder="Admin"
              error={errors.rol}
              registration={register("rol")}
              style={inputStyle}
            />
          </Grid>

          <Grid item xs={6}>
            <InputField
              disabled
              type="text"
              label="ID utilizator"
              placeholder="123"
              error={errors.id}
              registration={register("id")}
              style={inputStyle}
            />
          </Grid>

          <Grid item xs={6}>
            <InputField
              disabled
              type="text"
              label="Institutia medico-sanitara"
              placeholder="Spitalul Judetean de Urgenta"
              error={errors.imsp}
              registration={register("imsp")}
              style={inputStyle}
            />
          </Grid>

          <Grid item xs={6}>
            <InputField
              disabled={!edit}
              type="text"
              label="Număr de telefon"
              placeholder="0722 123 456"
              error={errors.phone}
              registration={register("phone")}
              style={inputStyle}
            />
          </Grid>

          <Grid item xs={6}>
            <InputField
              disabled={!edit}
              type="text"
              label="Nume"
              placeholder="Nume de familie"
              error={errors.lastname}
              registration={register("lastname")}
              style={inputStyle}
            />
          </Grid>

          <Grid item xs={6}>
            <InputField
              disabled={!edit}
              type="text"
              label="Prenume"
              placeholder="Prenume"
              error={errors.name}
              registration={register("name")}
              style={inputStyle}
            />
          </Grid>

          <Grid item xs={6}>
            <InputField
              disabled={!edit}
              type="email"
              label="Adresa de e-mail"
              placeholder="test@test.com"
              error={errors.username}
              registration={register("username")}
              style={inputStyle}
            />
          </Grid>

          <Grid item xs={6} position="relative">
            <InputField
              disabled={!edit}
              type={oldPasswordShown ? "text" : "password"}
              label="Parola Veche"
              placeholder="********"
              error={errors.oldPassword}
              registration={register("oldPassword")}
              style={inputStyle}
            />

            {edit && (
              <button
                type="button"
                style={{
                  position: "absolute",
                  top: errors.oldPassword ? "49%" : "59%",
                  right: "25%",
                }}
                onClick={() => setOldPasswordShown(!oldPasswordShown)}
              >
                <Image
                  src={oldPasswordShown ? eyeOpen : eyeClosed}
                  alt="eye"
                  width={17}
                  height={17}
                />
              </button>
            )}
          </Grid>

          <Grid item xs={6} position="relative">
            <InputField
              disabled={!edit}
              type={passwordShown ? "text" : "password"}
              label="Parola Noua"
              placeholder="********"
              error={errors.password}
              registration={register("password")}
              style={inputStyle}
            />

            {edit && (
              <button
                type="button"
                style={{
                  position: "absolute",
                  top: "59%",
                  right: "25%",
                }}
                onClick={() => setPasswordShown(!passwordShown)}
              >
                <Image
                  src={passwordShown ? eyeOpen : eyeClosed}
                  alt="eye"
                  width={17}
                  height={17}
                />
              </button>
            )}
          </Grid>
        </Grid>
      </form>

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
          {isSuccess
            ? "Contul a fost modificat cu succes!"
            : isError
            ? "Contul nu a putut fi modificat!"
            : null}
          <button
            style={{
              fontSize: "16px",
              boxShadow: "0px 0px 4px rgb(0 0 0 / 25%)",
              cursor: "pointer",
              width: "77px",
              padding: "9px 0",
            }}
            onClick={closeModification}
          >
            Bine
          </button>
        </div>
      </Dialog>
    </Stack>
  );
};

export default Setari;
