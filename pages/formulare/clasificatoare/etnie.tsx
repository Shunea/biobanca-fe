import { etnieColumns } from "@/features/formulare/clasificatoare/columns";
import Layout from "@/features/formulare/clasificatoare/Layout";
import { Etnie } from "@/features/formulare/clasificatoare/types";

const data: Etnie[] = [
  {
    id: 1,
    etnie: "Moldovean",
  },
  {
    id: 2,
    etnie: "Spaniol",
  },
];

interface EtnieProps {}

const Etnie: React.FC<EtnieProps> = () => {
  return <Layout<Etnie> columns={etnieColumns} data={data} title="Etnie" />;
};

export default Etnie;
