import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

import { navigation_menus } from "@/data";
export function Header() {
  return (
    <header className=" w-full sticky top-0 py-6 z-[9999] bg-white/[.39]  backdrop-blur-md border-b border-[#D4F2FB]">
      <nav
        className="mx-auto flex container items-center justify-between "
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5 flex items-center gap-3">
            <img
              src="/img/logo.svg"
              alt="GLAS Logo"
              width={40}
              height={40}
              className="w-8 h-8 md:w-10 md:h-10 rounded-full"
            />
            <span className="text-base md:text-lg lg:text-xl font-semibold text-black hidden sm:inline">
              Glow Acne Free Skin
            </span>
            <span className="text-base md:text-lg lg:text-xl font-semibold text-black sm:hidden">
              GLAS
            </span>
          </a>
        </div>
        <div className="flex lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Open main menu</span>
                <Menu className="h-6 w-6" aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle>
                  <div className="flex items-center gap-2">
                    <img
                      src="/img/logo.svg"
                      alt="GLAS Logo"
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                    <span className="font-semibold text-[#0891B2]">GLAS</span>
                  </div>
                </SheetTitle>
              </SheetHeader>
              <div className="mt-6 flex flex-col gap-4">
                {navigation_menus.map((item) => (
                  <SheetClose asChild key={item.name}>
                    <a
                      href={item.href}
                      className="text-xl font-familjen text-skin-gray-black hover:text-[#0891B2] transition-colors"
                    >
                      {item.name}
                    </a>
                  </SheetClose>
                ))}
                <div className="mt-4 pt-4 border-t">
                  <SheetClose asChild>
                    <Button>Connect Wallet</Button>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation_menus.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm lg:text-lg font-familjen text-skin-gray-black hover:text-[#0891B2] transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button>Connect Wallet</Button>
        </div>
      </nav>
    </header>
  );
}
