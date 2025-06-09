import { Box, Breadcrumbs, Divider, Grid, Link, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { clasificatoare } from "@/features/formulare/data";
import React from "react";
import { LinkBehaviour } from "@/styles/theme";


interface ClasificatoareProps {
  open: boolean;
}

const Clasificatoare: React.FC<ClasificatoareProps> = ({ open }) => {
  const router = useRouter();

  return (
    <Stack sx={{ pt: 4, pb: 6 }}>
         <Breadcrumbs
          sx={{ color: "#a3a3a3", fontSize: "24px", fontWeight: 400, mb: 2 }}
        >
          <Link
            component={LinkBehaviour}
            underline="none"
            color="text.primary"
            href="/formulare"
            sx={{
              marginLeft: "65px",
              "&:hover": {
                color: "#343d70",
              },
            }}
          >
            Formulare
          </Link>
          <Link
            component={LinkBehaviour}
            underline="none"
            color="#076AC9"
            href="/formulare/clasificatoare"
            sx={{  
              fontWeight: 600,
              "&:hover": {
                color: "#343d70",
              },
            }}
          >
            Clasificator
          </Link>
        </Breadcrumbs>
      <Divider variant="middle" sx={{ mx: "65px", mb: 6 }} />

      <Grid
        container
        spacing={2}
        rowSpacing={4}
        sx={{
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          mx: "65px",
          px: 4,
          py: 4,
          maxWidth: open ? "968px" : "1300px",
        }}
      >
        {clasificatoare.map((clasificator) => (
          <Grid item xs={open ? 3 : 12 / 5} key={clasificator.type}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "#076AC9",
                border: "1px solid #A3A3A3",
                borderRadius: "20px",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                color: "#ffffff",
                maxWidth: "226px",
                px: 2.5,
                py: 6,
                textAlign: "center",

                "&:hover": {
                  cursor: "pointer",
                },
              }}
              onClick={() => router.push(clasificator.link)}
            >
              {clasificator.type}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default Clasificatoare;
