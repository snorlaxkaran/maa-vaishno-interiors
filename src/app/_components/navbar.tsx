import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="max-w-6xl mx-auto w-full flex justify-between items-center p-4 lg:p-0 lg:py-1">
        <div className="flex gap-1 items-center">
          <Image src={"/z1.svg"} alt="aas" width={50} height={50} />
          <p className="text-sm text-slate-600 hidden md:block">
            Maa Vaishno Interiors
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link href={"/"}>
            <Button variant={"outline"} className="bg-transparent">
              Get in touch
              <Image
                src={"/whatsapp.svg"}
                alt="aas"
                width={17}
                height={17}
                className="text-green-400"
              />
            </Button>
          </Link>

          <Sheet>
            <SheetTrigger>
              <div className="md:hidden flex">
                <Menu />
              </div>
            </SheetTrigger>
            <SheetContent side={"left"}>
              <SheetHeader>Welcome to Maa Vaishno Interior</SheetHeader>
              <SheetDescription className="p-6 py-10">
                <Link href={"/gallery"}>Gallery</Link>
              </SheetDescription>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
