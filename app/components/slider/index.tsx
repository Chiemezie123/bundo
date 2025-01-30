import { Typography } from "@/components/typography";
import React from "react";
import { Input } from "@/components/input";
import { Button } from "@/components/button";
import Plus from "@/assets/svg2/plus";
import Search from "@/assets/svg2/search";
import Frame from "@/assets/svg2/frame";

export default function Slider() {
  return (
    <div className="border">
      <div></div>
      <div>
        <div>
          <Typography>Add New Business</Typography>
        </div>
        <div>
          <div className="flex items-start flex-col gap-[24px] ">
            <div>
              <Input
                name="Enter Address"
                label="Enter Address"
                placeholder="21b joy avenue Ajao Estate"
                icon1={<Search />}
              />
            </div>
            <div>
              <Input
                name="Business Name"
                label="Business Name"
                placeholder="Hair Ventures"
              />
            </div>
            <div>
              <Button children="Add Address" Icon={<Plus />} color="white" />
            </div>
          </div>
          <div className="flex flex-col selection:items-start gap-[32px]">
            <div>
              <Input
                name="Business Profile Picture"
                label="Business Profile Picture"
                placeholder="Image Link"
                icon1={<Frame />}
              />
            </div>
            <div>
              <Button children="Save Business " Icon={<Plus />} color="white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
