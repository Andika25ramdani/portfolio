"use client";
import { headerMenuLinks } from "@/constants/headerMenuLinks";
import { mergeClasses } from "@/lib/utils";
import { useEffect, useState } from "react";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerClose,
} from "@/components/drawer";
import { Menu, X } from "lucide-react";

import IconButton from "@/components/icon-button";
import Image from "next/image";
import Link from "next/link";
import ToggleTheme from "@/components/ToggleTheme";

import useScroll from "@/hooks/use-scroll";
import useWindowSize from "@/hooks/use-window-size";

export default function Header() {
  const scrolled = useScroll(40);
  const size = useWindowSize();
  const [isOpen, setIsOpen] = useState(false);

  // close sidebar if open in screen size < 768px
  useEffect(() => {
    if (size?.width && size?.width > 767 && isOpen) {
      setIsOpen(false);
    }
  }, [size, isOpen]);

  return (
    <header
      className={mergeClasses("header", scrolled ? "header-scrolled" : "")}
    >
      <div className="header-main">
        <Link href="/">
          <Image
            src="/default_logo.svg"
            alt="App Logo"
            width={64}
            height={64}
            priority
          />
        </Link>

        <div className="header-content">
          <ul className="header-menu">
            {headerMenuLinks.map((link, index) => (
              <li key={index} className="header-menu-item">
                <Link href={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
          <div className="h-6 w-0.5 bg-accent-300 rounded-full"></div>
          <ToggleTheme />
        </div>

        <Drawer open={isOpen} onOpenChange={setIsOpen}>
          <DrawerTrigger asChild className="flex md:hidden">
            <IconButton>
              <Menu />
            </IconButton>
          </DrawerTrigger>

          <DrawerContent>
            <div className="flex items-center justify-between border-b border-gray-100 p-4">
              <ToggleTheme />
              <DrawerClose asChild>
                <IconButton className="rounded-full">
                  <X />
                </IconButton>
              </DrawerClose>
            </div>

            <div className="border-b border-gray-100">
              <ul className="header-drawer-menu">
                {headerMenuLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.path}
                    onClick={() => {
                      const timeoutId = setTimeout(() => {
                        setIsOpen(false);
                        clearTimeout(timeoutId);
                      }, 500);
                    }}
                  >
                    <li className="header-drawer-menu-item">
                      {link.label}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </header>
  );
}
