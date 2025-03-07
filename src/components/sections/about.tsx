"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="sobre" className="container py-12" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="rounded-lg py-8"
      >
        <div className=" flex flex-col md:flex-row gap-8 md:gap-12 items-center justify-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="flex flex-col justify-between items-center"
          >
            <h2 className="max-w-4xl text-5xl font-bold md:text-5xl lg:text-6xl text-center">
              Olá, me chamo{" "}
              <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                Leonardo!
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mt-4 max-w-lg text-center">
              Welcome to my over-engineered personal blog where I write about
              software engineering, productivity, and other stupid stuff. Also,
              it&apos;s my portfolio.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
