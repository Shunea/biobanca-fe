import { Box, Divider, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { formulare } from "@/features/formulare/data";

interface FormulareProps {}

const Formulare: React.FC<FormulareProps> = ({}) => {
  const router = useRouter();

  return (
    <Stack sx={{ pt: 4, pb: 6 }}>
      <Typography
        variant="h5"
        color="#076AC9"
        fontWeight={600}
        sx={{
          marginBottom: 2,
          marginLeft: "65px",
        }}
      >
        Formulare
      </Typography>

      <Divider variant="middle" sx={{ mx: "65px", mb: 8 }} />

      <Stack
        direction="row"
        justifyContent="flex-start"
        spacing={5}
        sx={{ mx: "65px" }}
      >
        {formulare.map((formular) => (
          <Box
            key={formular.type}
            sx={{
              display: "flex",
              alignItems: "center",
              background: "#076AC9",
              border: "1px solid #A3A3A3",
              borderRadius: "20px",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              color: "#ffffff",
              maxWidth: "206px",
              px: 2.5,
              py: 6,
              textAlign: "center",

              "&:hover": {
                cursor: "pointer",
              },
            }}
            onClick={() => router.push(formular.link)}
          >
            {formular.type}
          </Box>
        ))}
      </Stack>
    </Stack>
  );
};

export default Formulare;
