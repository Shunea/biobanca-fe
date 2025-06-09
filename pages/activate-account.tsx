import useActivateAccount from "@/hooks/queries/useActivateAccount";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

interface ActivateAccountProps {}

const ActivateAccount: React.FC<ActivateAccountProps> = () => {
  const router = useRouter();
  const { status } = useActivateAccount(router.query.code as string, {
    enabled: !!router.query.code,
    refetchOnWindowFocus: false,
    retry: false,
  });

  return (
    <Stack sx={{ pt: 4, pb: 6, width: "100%" }}>
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
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
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
                  sx={{
                    fontSize: "40px",
                    textAlign: "center",
                    mt: "250px",
                  }}
                >
                  {status === "success"
                    ? "Contul a fost activat cu succes!"
                    : status === "error"
                    ? "Contul nu a putut fi activat!"
                    : "Activare cont"}
                </Typography>
              </Grid>
              <Grid item xs={12} display="flex" justifyContent="center">
                {status === "success" ? (
                  <button
                    type="submit"
                    form="forgot-password"
                    style={{
                      fontSize: "15px",
                      color: "#02509",
                      border: "1px solid #02509",
                      background: "#02509",
                      borderRadius: "20px",
                      width: "150px",
                      height: "35px",
                      textDecoration: "none",
                    }}
                    onClick={() => router.push("/login")}
                  >
                    Loghează-te
                  </button>
                ) : null}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Stack>
  );
};

export default ActivateAccount;
