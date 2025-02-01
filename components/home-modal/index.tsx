import React from "react";
import { Typography } from "@/components/typography";
import Search from "@/assets/svg2/search";
import Close from "@/assets/svg2/close";
import ContactIcon from "@/assets/svg2/contactIcon";
import { motion } from "framer-motion";

interface HomeModalProps{
    isOpen: boolean;
    onClose: ()=> void
}
export default function HomeModal({ isOpen, onClose }:HomeModalProps) {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: isOpen ? "0%" : "100%" }}
      exit={{ x: "100%" }}
      transition={{ type: "tween", duration: 0.3 }}
      className="fixed top-0 right-0 border flex flex-col gap-8 z-50 w-[300px] h-screen bg-white shadow-lg"
    >
      <div className="border bg-white shadow-md h-[59px] flex justify-end items-center px-6">
        <button onClick={onClose}>
          <Close />
        </button>
      </div>
      <div className="flex flex-col gap-8 px-6">
        <div className="flex items-center gap-2">
          <Search />
          <Typography>Explore</Typography>
        </div>
        <div className="flex items-center gap-2">
          <ContactIcon />
          <Typography>Account</Typography>
        </div>
      </div>
    </motion.div>
    )
}