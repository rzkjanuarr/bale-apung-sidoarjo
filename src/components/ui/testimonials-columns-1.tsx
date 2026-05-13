"use client";
import React from "react";
import { motion } from "framer-motion";

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: { text: string; image: string; name: string; role: string }[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div className="p-5 sm:p-8 rounded-3xl border border-primary/10 bg-white shadow-xl shadow-primary/5 max-w-xs w-full" key={i}>
                  <div className="text-slate-600 text-[10px] sm:text-sm leading-relaxed italic">"{text}"</div>
                  <div className="flex items-center gap-2 sm:gap-3 mt-4 sm:mt-6">
                    <img
                      width={40}
                      height={40}
                      src={image}
                      alt={name}
                      referrerPolicy="no-referrer"
                      className="h-8 w-8 sm:h-10 sm:w-10 rounded-full object-cover border-2 border-primary/20"
                    />
                    <div className="flex flex-col">
                      <div className="font-bold text-primary tracking-tight leading-none sm:leading-5 text-[10px] sm:text-sm">{name}</div>
                      <div className="text-[8px] sm:text-[10px] uppercase font-bold text-slate-400 tracking-widest mt-0.5">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
