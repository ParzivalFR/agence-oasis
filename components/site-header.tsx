"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { firaCode } from "@/fonts/FiraCode";
import { cn } from "@/lib/utils";
import { AlignJustify } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "./logo";
import { ThemeToggle } from "./theme-toggle";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";

const menuItem = [
  {
    id: 1,
    label: "Accueil",
    href: "/",
  },
  {
    id: 2,
    label: "Témoignages",
    href: "#testimonials",
  },
  {
    id: 3,
    label: "Tarifs",
    href: "#pricing",
  },
  {
    id: 4,
    label: "FAQs",
    href: "#faq",
  },
  {
    id: 5,
    label: "Contact",
    href: "#contact",
  },
];

export function SiteHeader() {
  const mobilenavbarVariant = {
    initial: {
      opacity: 0,
      scale: 1,
    },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2,
        delay: 0.2,
        ease: "easeOut",
      },
    },
  };

  const mobileLinkVar = {
    initial: {
      y: "-20px",
      opacity: 0,
    },
    open: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const containerVariants = {
    open: {
      transition: {
        staggerChildren: 0.06,
      },
    },
  };

  const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(false);

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) html.classList.toggle("overflow-hidden", hamburgerMenuIsOpen);
  }, [hamburgerMenuIsOpen]);

  useEffect(() => {
    const closeHamburgerNavigation = () => setHamburgerMenuIsOpen(false);
    window.addEventListener("orientationchange", closeHamburgerNavigation);
    window.addEventListener("resize", closeHamburgerNavigation);

    return () => {
      window.removeEventListener("orientationchange", closeHamburgerNavigation);
      window.removeEventListener("resize", closeHamburgerNavigation);
    };
  }, [setHamburgerMenuIsOpen]);

  return (
    <>
      <header className="fixed left-0 top-0 z-50 w-full translate-y-[-1rem] animate-fade-in border-b opacity-0 backdrop-blur-[12px] [--animation-delay:600ms]">
        <div className="container flex h-[3.5rem] items-center justify-between">
          <Link
            className={`text-2xl flex items-center ${firaCode.className}`}
            href="/"
          >
            <Logo size="2xl" />
          </Link>

          <div className="hidden ml-auto md:flex h-full items-center">
            <Link className="mr-6 text-sm" href="/signin">
              Connexion
            </Link>
            <Link
              className={cn(
                buttonVariants({ variant: "secondary" }),
                "mr-6 text-sm"
              )}
              href="/signup"
            >
              S'inscrire
            </Link>
            <ThemeToggle />
          </div>
          <div className="ml-6 md:hidden flex items-center gap-4">
            <ThemeToggle />
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="ghost">
                  <AlignJustify />
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <div className="mx-auto w-full max-w-sm">
                  <DrawerHeader>
                    <DrawerTitle>Menu de navigation</DrawerTitle>
                    <DrawerDescription>
                      Choisissez où vous voulez aller.
                    </DrawerDescription>
                  </DrawerHeader>
                  <div className="flex flex-col items-center justify-center gap-2 px-10">
                    {menuItem.map((item) => (
                      <Button
                        key={item.id}
                        className="w-full max-w-[150px]"
                        variant="secondary"
                        asChild
                      >
                        <Link
                          className="hover:text-grey uppercase font-black"
                          href={item.href}
                        >
                          {item.label}
                        </Link>
                      </Button>
                    ))}
                  </div>
                  <DrawerFooter>
                    <DrawerClose asChild>
                      <Button>Fermer</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </div>
              </DrawerContent>
            </Drawer>
            {/* <button onClick={() => setHamburgerMenuIsOpen((open) => !open)}>
              <span className="sr-only">Toggle menu</span>
              {hamburgerMenuIsOpen ? <XIcon /> : <AlignJustify />}
            </button> */}
          </div>
        </div>
      </header>

      {/* <AnimatePresence>
        <motion.nav
          initial="initial"
          exit="exit"
          variants={mobilenavbarVariant}
          animate={hamburgerMenuIsOpen ? "animate" : "exit"}
          className={cn(
            `fixed left-0 top-0 z-50 h-screen w-full overflow-auto bg-background/70 backdrop-blur-[12px] `,
            {
              "pointer-events-none": !hamburgerMenuIsOpen,
            }
          )}
        >
          <div className="container flex h-[3.5rem] py-10 items-center justify-between">
            <Link
              className={`text-4xl flex items-center ${lilitaOne.className}`}
              href="/"
            >
              OASIS.
            </Link>

            <button
              className="ml-6 md:hidden"
              onClick={() => setHamburgerMenuIsOpen((open) => !open)}
            >
              <span className="sr-only">Toggle menu</span>
              {hamburgerMenuIsOpen ? (
                <XIcon
                  size={36}
                  className="transition hover:rotate-180 duration-500"
                />
              ) : (
                <AlignJustify />
              )}
            </button>
          </div>
          <motion.ul
            className={`pt-12 pl-4 flex flex-col md:flex-row md:items-center uppercase md:normal-case ease-in`}
            variants={containerVariants}
            initial="initial"
            animate={hamburgerMenuIsOpen ? "open" : "exit"}
          >
            {menuItem.map((item) => (
              <motion.li
                variants={mobileLinkVar}
                key={item.id}
                className=" pl-6 py-2  md:border-none"
              >
                <Link
                  className={`hover:text-grey flex h-[var(--navigation-height)] w-full items-center text-xl transition-[color,transform] duration-500 md:translate-y-0 md:text-sm md:transition-colors ${
                    hamburgerMenuIsOpen ? "[&_a]:translate-y-0" : ""
                  }`}
                  href={item.href}
                  onClick={() => setHamburgerMenuIsOpen(false)}
                >
                  {item.label}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </motion.nav>
      </AnimatePresence> */}
    </>
  );
}
