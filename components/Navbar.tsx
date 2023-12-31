import prismaDB from "@/lib/prismaDB";
import { auth, UserButton } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import MainNav from "./MainNav";
import StoreSwitcher from "./StoreSwitcher";
import { ThemeToggle } from "./ThemeToggle";

const Navbar = async () => {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const store = await prismaDB.store.findMany({
    where: {
      userId,
    },
  });

  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <StoreSwitcher items={store} />
        <MainNav className="mx-6" />
        <div className="ml-auto flex items-center space-x-4">
          <ThemeToggle />
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
