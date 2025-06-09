import RegistruTable from "@/features/registru/components/RegistruTable";
import { Stack, Typography } from "@mui/material";

interface RegistruProps {}

const Registru: React.FC<RegistruProps> = () => {
  return (
    <Stack sx={{ pt: 4, pb: 6, pl: 8, pr: 12 }}>
      <Typography
        color="action.active"
        variant="h5"
        sx={{
          fontWeight: 600,
          marginBottom: 2,
        }}
      >
        Registru de evidență a pacientilor COVID-19
      </Typography>

      <RegistruTable />
    </Stack>
  );
};

export default Registru;
