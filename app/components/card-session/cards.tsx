'use client'

import { Typography } from "@/components/typography";
import React from "react";

import Location from "@/assets/svg2/location";
import TagIcon from "@/assets/svg2/tagIcon";
import Star from "@/assets/svg2/star";
import { Button } from "@/components/button";
import Image from "next/image";
import Love from "@/assets/svg2/love";
import { cardProps } from "./index.types";
import Plus from "@/assets/svg2/plus";

export default function Cards(props: cardProps) {
  const {
    image,
    brandName,
    description,
    location,
    tags1,
    tags2,
    tags3,
    reviews,
  } = props;
  return (
    <div className=" relative flex flex-col justify-between flex-1 w-full h-[302px] pl-[20px] pt-[14px] pr-[9px] pb-[19px] bg-[#FCFBF8] border-b-[0.692px] border-b-[#D6EEDD] rounded-[10px]">
      {/* first */}
      <div className="relative inset-0 mb-[10px]">
        <div className="absolute right-0 mlg:right-[10px] mxs:right-0">
          <Love/>
        </div>
        <div>
          {image && (
            <Image src={image} alt="Brand image" width={100} height={100} />
          )}
        </div>
      </div>
      {/* second */}
      <div className="relative flex flex-col items-start gap-3 flex-1">
        <div className="flex flex-col items-start gap-0.5">
          <div>
            <Typography
              variant="h-xs"
              font="sans"
              color="palm-green-950"
              fontWeight="semibold"
              className="leading-normal"
            >
              {brandName}
            </Typography>
          </div>
          <div className="flex items-center gap-1">
          <Location/>
            <Typography
              variant="c-s"
              font="sans"
              fontWeight="regular"
              color="mine-shaft-950"
              className="leading-normal"
            >
              5 minutes away from you
            </Typography>
          </div>

          <div>
            <Typography
              color="fuscous-gray-950"
              variant="c-m"
              fontWeight="regular"
              font="sans"
              className="leading-normal"
            >
              {description}
            </Typography>
          </div>
        </div>
        <div className="flex w-[155px] flex-col items-start gap-2 ">
          <div className="flex items-center gap-1">
            <div className="w-[12.451px] h-[12.451px] bg-[#D6EEDD] rounded-full flex justify-center items-center">
              <Location/>
            </div>
            <Typography
              color="mine-shaft-900"
              variant="c-m"
              fontWeight="regular"
              font="sans"
              className="leading-normal"
            >
              {location}
            </Typography>
          </div>
          <div className="flex w-[111px] h-[12px] items-center gap-[3.46px]">
            <div className="w-[12.451px] h-[12.451px] bg-[#D6EEDD] rounded-full flex justify-center items-center">
            <TagIcon/>
            </div>
            <Typography
              color="chateau-green-500"
              variant="c-m"
              fontWeight="regular"
              font="sans"
              className=" leading-normal underline decoration-solid decoration-slice decoration-auto underline-offset-auto"
            >
              {tags1}
            </Typography>
            <Typography
              color="chateau-green-500"
              variant="c-m"
              fontWeight="regular"
              font="sans"
              className=" leading-normal underline decoration-solid decoration-slice decoration-auto underline-offset-auto"
            >
              {tags2}
            </Typography>
            <Typography
              color="chateau-green-500"
              variant="c-m"
              fontWeight="regular"
              font="sans"
              className=" leading-normal underline decoration-solid decoration-slice decoration-auto underline-offset-auto"
            >
              {tags3}
            </Typography>
          </div>
          <div className="w-full h-[11px] flex items-center gap-1">
            <div className="flex w-[48.444px] h-[10.023px] justify-between items-center">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
            <Typography
              color="mine-shaft-950"
              variant="c-m"
              fontWeight="regular"
              font="sans"
              className="leading-normal"
            >
              {reviews ?? "No reviews yet"}
            </Typography>
          </div>
        </div>
      </div>
      {/* third */}
      <div className="relative flex items-center justify-center mt-[5px]">
        <Button color='white' children={"View Page"} className="h-[29px] text-c-lm font-sans mlg:w-full mxxs:text-c-m" size="primary"/>
      </div>
    </div>
  );
}
