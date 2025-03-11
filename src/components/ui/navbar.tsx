"use client";
import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ModeToggle } from "../mode-toggle";
import { Menu, Home } from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./sheet";
import { DialogTitle } from "@radix-ui/react-dialog";
import { type FloatingNavProps } from "@/types/floating-nav.type";
import { LangSwitcher } from "../language-switcher";

export const FloatingNav = ({ navItems, className }: FloatingNavProps) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollYProgress.get() === 0) {
        setVisible(true);
      }
    };

    const unsubscribe = scrollYProgress.on("change", handleScroll);
    return () => unsubscribe();
  }, [scrollYProgress]);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - (scrollYProgress.getPrevious() ?? 0);

      if (scrollYProgress.get() > 0.05) {
        setVisible(direction < 0);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "flex fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full bg-card shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-40 pr-4 pl-4 py-2 items-center justify-between w-full max-w-sm",
          className
        )}
      >
        <Link href="/" className="sm:hidden">
          <Home className="size-5" />
        </Link>

        <div className="hidden sm:flex space-x-4">
          {navItems.map((navItem, idx) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className="relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
            >
              <span className="text-sm">{navItem.name}</span>
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <LangSwitcher />
          <ModeToggle />
          <Sheet>
            <SheetTrigger className="sm:hidden">
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent side="right">
              <DialogTitle />
              <nav className="grid gap-6 text-lg font-medium">
                {navItems.map((item) => (
                  <SheetClose asChild key={item.name}>
                    <Link href={item.link} className={cn("text-foreground")}>
                      {item.name}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
