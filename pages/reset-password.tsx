import { InputField } from "@/components/Form";
import { useResetPassword } from "@/hooks/mutations/useResetPassword";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";

const eyeOpen = "/eye-svgrepo-com-1.svg";
const eyeClosed = "/eye-off-svgrepo-com-1.svg";

type FormData = {
  password: string;
  confirmPassword: string;
};

interface ResetPasswordProps {}

const ResetPassword: React.FC<ResetPasswordProps> = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);
  const router = useRouter();
  const { register, handleSubmit, watch, formState } = useForm<FormData>({
    mode: "onChange",
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });
  const { mutate, isLoading } = useResetPassword();

  const onSubmit = (data: FormData) => {
    mutate({
      code: router.query.code as string,
      password: data.password,
    });
  };

  return (
    <Stack sx={{ pt: 4, pb: 6, width: "100%" }}>
      <form
        noValidate
        id="reset-password"
        onSubmit={(e) => {
          handleSubmit(onSubmit)(e);
        }}
      >
       <Box
          sx={{
            top:0,
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
          <Grid container>
            <Grid item xs={6}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  background: "#02509B",
                  boxShadow: "2px 2px 2px 2px rgba(0.25,0,0, 0.25)",
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
                    sx={{ fontSize: "30px", pl: "75px", mt: "160px" }}
                  >
                    Introdu parola nouă
                  </Typography>
                </Grid>
                <Grid item xs={12} position="relative">
                  <InputField
                    type={passwordShown ? "text" : "password"}
                    placeholder="Parola"
                    error={formState.errors["password"]}
                    registration={register("password", {
                      required: "Acest câmp este obligatoriu",
                    })}
                    style={{
                      borderRadius: "20px",
                      width: "85%",
                    }}
                  />
                  <button
                    type="button"
                    style={{
                      position: "absolute",
                      top: "35%",
                      right: "17%",
                    }}
                    onClick={() => setPasswordShown(!passwordShown)}
                  >
                    <Image
                      src={passwordShown ? eyeOpen : eyeClosed}
                      alt="eye"
                      width={25}
                      height={25}
                    />
                  </button>
                </Grid>
                <Grid item xs={12} position="relative">
                  <InputField
                    type={confirmPasswordShown ? "text" : "password"}
                    placeholder="Confirmă parola"
                    error={formState.errors["confirmPassword"]}
                    registration={register("confirmPassword", {
                      required: "Acest câmp este obligatoriu",
                      validate: (value) => {
                        if (value === watch("password")) {
                          return true;
                        } else {
                          return "Parolele nu se potrivesc";
                        }
                      },
                    })}
                    style={{
                      borderRadius: "20px",
                      width: "85%",
                    }}
                  />
                  <button
                    type="button"
                    style={{
                      position: "absolute",
                      top: "35%",
                      right: "17%",
                    }}
                    onClick={() =>
                      setConfirmPasswordShown(!confirmPasswordShown)
                    }
                  >
                    <Image
                      src={confirmPasswordShown ? eyeOpen : eyeClosed}
                      alt="eye"
                      width={25}
                      height={25}
                    />
                  </button>
                </Grid>
                <Grid item xs={12} display="flex" justifyContent="center">
                  <button
                    disabled={isLoading}
                    type="submit"
                    form="reset-password"
                    style={{
                      fontSize: "15px",
                      color: "#fff",
                      border: "1px solid #02509",
                      background: "#02509",
                      borderRadius: "20px",
                      margin: "0 0 0 -80px",
                      width: "150px",
                      height: "35px",
                      textDecoration: "none",
                    }}
                  >
                    Salvează
                  </button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </form>
    </Stack>
  );
};

export default ResetPassword;
