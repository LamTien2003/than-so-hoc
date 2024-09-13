import Link from "next/link";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import Sheet from "@/components/custom/Sheet/Sheet";

const menu = [
  {
    title: "Trang chủ",
    href: "/",
  },
  {
    title: "Thần số học",
    href: "/",
  },
  {
    title: "Tarot",
    href: "/",
  },
  {
    title: "Bảng đồ sao",
    href: "/",
  },
  {
    title: "Liên hệ",
    href: "/",
  },
];

const Header = () => {
  return (
    <div className="container mx-auto px-4">
      <header className="grid grid-cols-3 justify-items-center h-20 w-full shrink-0 items-center md:flex">
        <Sheet
          content={
            <>
              <Link href="#" prefetch={false}>
                <HamburgerMenuIcon className="h-6 w-6" />
              </Link>
              <div className="grid gap-2 py-6">
                {menu.map(item => (
                  <Link
                    href={item.href}
                    className="flex w-full items-center py-2 text-lg font-semibold"
                    prefetch={false}
                    key={item.title}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </>
          }
        >
          <Button variant="outline" size="icon" className="hidden md:block">
            <HamburgerMenuIcon className="h-6 w-6" />
          </Button>
        </Sheet>

        <Link href="#" className="flex mr-6 md:hidden " prefetch={false}>
          <HamburgerMenuIcon className="h-6 w-6" />
        </Link>

        <NavigationMenu className="flex md:hidden justify-center">
          <NavigationMenuList>
            {menu.map(item => (
              <NavigationMenuLink asChild key={item.title}>
                <Link
                  href={item.href}
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                  prefetch={false}
                >
                  {item.title}
                </Link>
              </NavigationMenuLink>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex gap-2">
          <Button variant="outline">Đăng nhập</Button>
          <Button>Đăng ký</Button>
        </div>
      </header>
    </div>
  );
};

export default Header;
