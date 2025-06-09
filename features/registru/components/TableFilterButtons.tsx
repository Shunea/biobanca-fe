import { useFilterStore } from "@/stores/filter";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";

interface TableFilterButtonsProps {}

export const TableFilterButtons: React.FC<TableFilterButtonsProps> = ({}) => {
  const resetFilter = useFilterStore((state) => state.resetFilter);

  return (
    <Stack spacing={2}>
      <button type="button" onClick={resetFilter}>
        <Stack
          direction="row"
          sx={{
            alignItems: "center",
            backgroundColor: "#ffffff",
            borderRadius: "3px",
            boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
            px: 2,
            py: 0.5,
            cursor: "pointer",
          }}
        >
          <Image src="/delete.svg" alt="sterge" width={24} height={24} />
          <Typography fontSize={9} fontWeight={400} sx={{ ml: 1 }}>
            Șterge {<br />}
            filtrare
          </Typography>
        </Stack>
      </button>
    </Stack>
  );
};
