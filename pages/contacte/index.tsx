import { Stack } from "@mui/material";
import { useRouter } from "next/navigation";

interface ContacteProps {
  open: boolean;
}

const Contacte: React.FC<ContacteProps> = ({ open }) => {
 
  const router = useRouter();

  return (
    <Stack sx={{ pt: 4, pb: 6, pl: 6 }}>
      Contacte
    </Stack>
  );
};

export default Contacte;
