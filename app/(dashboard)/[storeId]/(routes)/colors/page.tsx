import prismaDB from "@/lib/prismaDB";
import ColorClient from "./components/client";
import { ColorColumn } from "./components/coloumns";
import { format } from "date-fns";

const ColorPage = async ({ params }: { params: { storeId: string } }) => {
  const colors = await prismaDB.color.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formatedColors: ColorColumn[] = colors.map((item) => ({
    id: item.id,
    name: item.name,
    value: item.value,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ColorClient data={formatedColors} />
      </div>
    </div>
  );
};

export default ColorPage;
