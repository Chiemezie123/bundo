import { Typography } from "@/components/typography";
import Image from "next/image";
import React from "react";
import ArrowDown from "@/assets/images/Arrow - Down Circle.svg";
import { FAQarray } from "@/constants/data";

export default function FAQbody() {
  return (
    <div className="flex flex-col items-start gap-5 w-[598px]">
      {FAQarray.map((items) => (
        <div className="flex items-start justify-between gap-4 w-full py-[18px] border-b-[0.5px] border-dashed border-[#889385]">
          <Typography
            variant="h-m"
            color="palm-green-950"
            font="sans"
            fontWeight="bold"
          >
            {items.question}
          </Typography>
          <div>
            <Image src={ArrowDown} alt="arrow-down" height={24} width={24} />
          </div>
        </div>
      ))}
    </div>
  );
}
