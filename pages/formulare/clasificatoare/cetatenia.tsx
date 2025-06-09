import { cetatenieColumns } from "@/features/formulare/clasificatoare/columns";
import Layout from "@/features/formulare/clasificatoare/Layout";
import { Cetatenie } from "@/features/formulare/clasificatoare/types";

const data: Cetatenie[] = [
  {
    id: 1,
    cetatenie: "RM",
  },
  {
    id: 2,
    cetatenie: "ES",
  },
];

interface CetatenieProps {}

const Cetatenie: React.FC<CetatenieProps> = () => {
  return (
    <Layout<Cetatenie>
      columns={cetatenieColumns}
      data={data}
      title="Cetățenia"
    />
  );
};

export default Cetatenie;
