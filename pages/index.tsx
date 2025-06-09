import { Box, Divider, Stack, Typography } from "@mui/material";
import Image from "next/image";
import registru from "../public/registru-01.svg";
import formular from "../public/Formulare.svg";
import setari from "../public/Setting.svg";
import probe from "../public/Donator-01.svg";
import { useRouter } from "next/navigation";

const cards = [
  {
    title: "Formulare",
    icon: formular,
  },
  {
    title: "Registru",
    icon: registru,
  },
  {
    title: "Colecteaza Probe",
    icon: probe,
  },
  {
    title: "Setari",
    icon: setari,
  },
];

export default function Home() {
  const router = useRouter();

  return (
    <Box>
      <Box
        sx={{
          background:
            "linear-gradient(89.97deg, #02509B 24.04%, #076AC9 76.83%)",
          width: "100%",
          paddingTop: "35%",
        }}
      >
        <Box
          color="text.secondary"
          fontSize={48}
          sx={{
            position: "absolute",
            top: "30%",
            left: "50%",
            transform: "translate(-50%, -40%)",
            textAlign: "center",
            width: "100%",
            maxWidth: "50ch",
          }}
        >
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              fontSize: "60px",
              marginTop: "100px",
              marginLeft: "10%",
              fontWeight: "300",
              lineHeight: "73px",
              letterSpacing: "0em",
            }}
          >
            Registrul de evidență a bio-specimenilor in cadrul biobancii
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          position: "absolute",
          top: "75%",
          left: "50%",
          transform: "translate(-50%, -55%)",
          width: "100%",
          px: 4,
          py: 4,
        }}
      >
        <Stack direction="row" justifyContent="space-evenly">
          {cards.map((card) => (
            <Box
              key={card.title}
              sx={{
                backgroundColor: "primary.main",
                borderRadius: "10px",
                boxShadow: "0px 0px 7px rgba(0, 0, 0, 0.25)",
                p: 8,
                width: "60",
                "&:hover": {
                  cursor: "pointer",
                },
              }}
              onClick={() => router.push(`/${card.title.toLowerCase()}`)}
            >
              <Stack alignItems="center">
                <Image
                  width={51}
                  height={51}
                  src={card.icon}
                  alt={card.title}
                />
                <Typography fontSize={16} pt={2}>
                  {card.title}
                </Typography>
              </Stack>
            </Box>
          ))}
        </Stack>
      </Box>
      <Box sx={{ mb: 10 }}></Box>
    </Box>
  );
}
