import React from "react";
import { Button } from "@/components/button";
import { Typography } from "@/components/typography";
import EmptyState from "@/components/emptyLocationState";
import Plus from "@/assets/svg2/plus";

export default function Map() {

  return (
    <div className="max-w-[1214.833px] mx-auto mt-[50px] flex flex-col gap-[32px] mlg:px-[24px]">
      <div className="flex items-center justify-between mxs:flex-col mxs:items-start mxs:gap-[1rem] ">
        <div>
          <Typography variant="p-xxl" font="sans" fontWeight="medium" color="mine-shaft-950" className="leading-normal">Explore Business</Typography>
        </div>
        <div>
          <Button
            Icon={<Plus />}
            children={"Add Business"}
            color="white"
            className="text-c-l"
          />
        </div>
      </div>
      <div className="border border-[#C9C2B6] rounded-[20px] w-full h-[678px] flex items-center justify-center">
            <EmptyState/>
      </div>
    </div>
  );
}
