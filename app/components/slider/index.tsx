import { Typography } from "@/components/typography";
import React from "react";
import { Input } from "@/components/input";
import { Button } from "@/components/button";
import Plus from "@/assets/svg2/plus";
import Search from "@/assets/svg2/search";
import Frame from "@/assets/svg2/frame";
import Close from "@/assets/svg2/close";
export default function Slider() {
  return (
    <div className="border flex flex-col gap-[32px]">
      <div className="border bg-white shadow-[0px_3px_5px_rgba(9,30,66,0.2)] h-[59px] flex justify-end items-center px-[24px]">
        <Close/>
      </div>
      <div className="flex flex-col gap-[32px] px-[24px]">
        <div>
          <Typography variant="h-m" color="mine-shaft-950" font="sans" fontWeight="medium" className="leading-normal" >Add New Business</Typography>
        </div>
        <div className="flex flex-col gap-[24px]">
          <div className="flex items-start flex-col gap-[24px] ">
            <div className="w-full">
              <Input
                name="Enter Address"
                label="Enter Address"
                placeholder="21b joy avenue Ajao Estate"
                icon1={<Search />}
              />
            </div>
            <div className="w-full">
              <Input
                name="Business Name"
                label="Business Name"
                placeholder="Hair Ventures"
              />
            </div>
            <div className="w-full">
               <Button
                          Icon={<Plus />}
                          children={"Add Business"}
                          color="white"
                          className="text-c-l w-full"
                        />
            </div>
          </div>
          <div className="flex flex-col selection:items-start gap-[32px]">
            <div className="w-full">
              <Input
                name="Business Profile Picture"
                label="Business Profile Picture"
                placeholder="Image Link"
                icon1={<Frame />}
              />
            </div>
            <div>
              <Button
                         children={"Save Business "}
                         color="white"
                         className="text-c-l w-full"
                       />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
