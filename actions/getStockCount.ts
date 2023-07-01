import prismaDB from "@/lib/prismaDB";

export const getStckCount = async (storeId: string) => {
  const stockCount = await prismaDB.product.count({
    where: {
      storeId,
      isArchived: false,
    },
  });

  return stockCount;
};
