import { InputField } from "@/components/Form";
import useForgotPassword from "@/hooks/queries/useForgotPassword";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useForm } from "react-hook-form";

interface FormData {
  username: string;
}

interface ForgotPasswordProps {}

const ForgotPassword: React.FC<ForgotPasswordProps> = () => {
  const { register, handleSubmit, watch, formState } = useForm<FormData>({
    mode: "onChange",
    defaultValues: {
      username: "",
    },
  });
  const username = watch("username");
  const { refetch } = useForgotPassword(username, {
    enabled: false,
  });

  const onSubmit = (data: FormData) => {
    refetch();
  };

  return (
    <Stack sx={{ pt: 4, pb: 6, width: "100%" }}>
      <form
        noValidate
        id="forgot-password"
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
                    sx={{ fontSize: "40px", pl: "100px", mt: "160px" }}
                  >
                    Introdu Email
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <InputField
                    type="text"
                    placeholder="E-mail"
                    error={formState.errors["username"]}
                    registration={register("username", {
                      required: "Acest câmp este obligatoriu",
                    })}
                    style={{
                      borderRadius: "20px",
                      width: "85%",
                    }}
                  />
                </Grid>
                <Grid item xs={12} display="flex" justifyContent="center">
                  <button
                    type="submit"
                    form="forgot-password"
                    style={{
                      fontSize: "15px",
                      color: "#fff",
                      border: "1px solid #02509",
                      background: "#02509B",
                      borderRadius: "20px",
                      margin: "0 0 0 -80px",
                      width: "150px",
                      height: "35px",
                      textDecoration: "none",
                    }}
                  >
                    Trimite cod
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

export default ForgotPassword;
