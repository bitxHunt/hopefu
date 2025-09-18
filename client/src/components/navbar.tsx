import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { Button } from "@/components/ui/button";

import { AlignJustify } from "lucide-react";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/20">
      <div className="flex h-16 sm:h-20 w-full items-center px-4 md:px-6 max-w-9xl mx-auto">
        <div className="sm:mx-6">
          <a href="/" className="flex items-center space-x-2">
            <img className="h-8 sm:h-12 w-auto" src="me" alt="Hopefu Logo" />
          </a>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden ml-auto text-white hover:bg-white/10"
            >
              <AlignJustify className="h-5 w-5 sm:h-6 sm:w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="bg-black/95 border-white/10 w-[85vw] sm:w-[400px]"
          >
            <SheetHeader className="mb-6">
              <SheetTitle>
                <img
                  className="object-fit h-10 w-20"
                  src="me"
                  alt="Hopefu Logo"
                />
              </SheetTitle>
              <SheetDescription className="text-white/70 hidden">
                Access our website&apos; main navigation links
              </SheetDescription>
            </SheetHeader>

            <div className="grid gap-4">
              <a
                href="/"
                className="text-base sm:text-lg text-white hover:text-blue-400 transition-colors duration-300 py-1"
              >
                Quiz
              </a>
              <a
                href="/inventory"
                className="text-base sm:text-lg text-white hover:text-blue-400 transition-colors duration-300 py-1"
              >
                Inventory
              </a>
              <a
                href="/gatcha"
                className="text-base sm:text-lg text-white hover:text-blue-400 transition-colors duration-300 py-1"
              >
                Gatcha
              </a>
              <a
                href="/database"
                className="text-base sm:text-lg text-white hover:text-blue-400 transition-colors duration-300 py-1"
              >
                Database
              </a>
              <a
                href="/journaling"
                className="text-base sm:text-lg text-white hover:text-blue-400 transition-colors duration-300 py-1"
              >
                Journaling
              </a>
            </div>
          </SheetContent>
        </Sheet>

        <NavigationMenu className="ml-auto hidden lg:flex">
          <NavigationMenuList className="space-x-1">
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/"
                className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white hover:bg-white/10 transition-colors duration-300"
              >
                Quiz
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/inventory"
                className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white hover:bg-white/10 transition-colors duration-300"
              >
                Inventory
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/gatcha"
                className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white hover:bg-white/10 transition-colors duration-300"
              >
                Gatcha
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/database"
                className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white hover:bg-white/10 transition-colors duration-300"
              >
                Database
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/journaling"
                className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white hover:bg-white/10 transition-colors duration-300"
              >
                Journaling
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};

export default Navbar;
