import { Typography } from "@/components/typography";
import React from "react";
import { FAQarray } from "@/constants/data";
import ArrowDown from "@/assets/svg2/arrowDown";

export default function FAQbody() {
  return (
    <div className="flex flex-col items-start gap-5 w-[598px] mxs:w-full">
      {FAQarray.map((items,index) => (
        <div key={index} className="flex items-start justify-between gap-4 w-full py-[18px] border-b-[0.5px] border-dashed border-[#889385]">
          <Typography
            variant="h-m"
            color="palm-green-950"
            font="sans"
            fontWeight="bold"
          >
            {items.question}
          </Typography>
          <div>
            <ArrowDown/>
          </div>
        </div>
      ))}
    </div>
  );
}
