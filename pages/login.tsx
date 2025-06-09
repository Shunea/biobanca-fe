import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { InputField } from "@/components/Form";
import Link from "next/link";
import Image from "next/image";
import { LoginCredentialsDTO } from "@/features/auth/api/login";
import { useLogin } from "@/hooks/mutations/useLogin";
import { useState } from "react";

const eyeOpen = "/eye-svgrepo-com-1.svg";
const eyeClosed = "/eye-off-svgrepo-com-1.svg";

interface AdminProps {}

const Admin: React.FC<AdminProps> = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const { register, handleSubmit, setError, formState } =
    useForm<LoginCredentialsDTO>({
      mode: "onChange",
      defaultValues: {
        username: "",
        password: "",
      },
    });
  const { mutate, isLoading } = useLogin();

  const onSubmit: SubmitHandler<LoginCredentialsDTO> = (data) => {
    mutate(data, {
      onError: (error) => {
        setError("password", {
          type: "manual",
          message: (error as any).response?.data.message,
        });
      },
    });
  };

  return (
    <Stack sx={{ pt: 4, pb: 6, width: "100%" }}>
      <form
        noValidate
        id="login"
        onSubmit={(e) => {
          handleSubmit(onSubmit)(e);
        }}
      >
        <Box
          sx={{
            top: 0,
            right: 0,
            position: "absolute",
            background: "#02509B",
            width: "250px",
            height: "100vh",
          }}
        />
        <Box
          sx={{
            position: "relative",
            background: "#FFF",
            boxShadow: "2px 2px 2px 2px rgba(0,0,0, 0.25)",
            height: "634px",
            mx: "65px",
          }}
        >
          <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  background: "#02509B",
                  boxShadow: "2px 2px 2px 0px rgba(0,0,0, 0.25)",
                  height: "634px",
                  width: "415px",
                }}
              >
                <Grid item xs={6}>
                  <Typography
                    sx={{
                      color: "#fff",
                      fontSize: "30px",
                      fontWeight: "700",
                      pl: "50px",
                      pt: "250px",
                      width: "350px",
                    }}
                  >
                    Registrul de evidență a biospecimenilor
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Image
                    src="/Admin_usmf_logo.svg"
                    alt="admin"
                    width={232}
                    height={232}
                    style={{ marginLeft: "80px", marginTop: "200px" }}
                  />
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={5}>
              <Grid
                container
                spacing={2}
                alignItems="center"
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Grid item xs={12}>
                  <Typography
                    sx={{ fontSize: "40px", pl: "100px", mt: "160px" }}
                  >
                    Logare
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <InputField
                    type="text"
                    placeholder="E-mail"
                    registration={register("username", {
                      required: "Acest câmp este obligatoriu",
                    })}
                    style={{
                      borderRadius: "20px",
                      width: "85%",
                      marginLeft: "-20px",
                    }}
                  />
                </Grid>
                <Grid item xs={12} position="relative">
                  <InputField
                    type={passwordShown ? "text" : "password"}
                    placeholder="Parola"
                    registration={register("password", {
                      required: "Acest câmp este obligatoriu",
                    })}
                    style={{
                      borderRadius: "20px",
                      width: "85%",
                      marginLeft: "-20px",
                    }}
                  />
                  <button
                    type="button"
                    style={{
                      position: "absolute",
                      top: "30%",
                      right: "17%",
                    }}
                    onClick={() => setPasswordShown(!passwordShown)}
                  >
                    <Image
                      src={passwordShown ? eyeOpen : eyeClosed}
                      alt="eye"
                      width={17}
                      height={17}
                      style={{
                        background: "none",
                        marginTop: "8px",
                        marginRight: "60px",
                      }}
                    />
                  </button>
                </Grid>
                {formState.errors["password"] && (
                  <div
                    role="alert"
                    aria-label={formState.errors["password"].message}
                    style={{
                      color: "red",
                      fontSize: "12px",
                      marginLeft: "25px",
                      marginTop: "5px",
                    }}
                  >
                    {formState.errors["password"].message}
                  </div>
                )}
                <Grid item xs={12} display="flex" justifyContent="center">
                  <button
                    disabled={isLoading}
                    type="submit"
                    form="login"
                    style={{
                      fontSize: "15px",
                      color: "#fff",
                      border: "1px solid #343D70",
                      background: "#02509B",
                      borderRadius: "20px",
                      margin: "0 0 0 -130px",
                      width: "150px",
                      height: "35px",
                      textDecoration: "none",
                    }}
                  >
                    Logare
                  </button>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    style={{
                      color: "white",
                      padding: "10px 0 10px  70px",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    <Typography sx={{ fontSize: "15px", color: "black" }}>
                      Ai uitat parola?
                      <Link
                        href="/forgot-password"
                        style={{ marginLeft: "10px", textDecoration: "none" }}
                      >
                        Apasa aici
                      </Link>
                    </Typography>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </form>
    </Stack>
  );
};

export default Admin;
