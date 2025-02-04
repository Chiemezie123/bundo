'use client'
import React, { useEffect, useState } from "react";
import { Button } from "@/components/button";
import { Typography } from "@/components/typography";
import Plus from "@/assets/svg2/plus";
import GoogleMapComponent from "../googleMapComp";
import axios from "axios";
import { BusinessArray } from "../googleMapComp/index.types";
import Slider from "../slider";

export default function Map() {
const apiUrl = process.env.NEXT_PUBLIC_API_URL || " ";
  const [location , setLocation] = useState<BusinessArray>([]);
  const [openSlider, setOpenSlider] = useState<boolean>(false);

  useEffect(() => {
    const getAllLocation = async () => {
      if (!apiUrl) {
        console.error("NEXT_PUBLIC_API_URL is not set.");
        return;
      }
  
      try {
        const response = await axios.get(apiUrl);
        const { data } = response?.data;
        setLocation(data);
      } catch (error) {
        console.error("Error fetching location data:", error);
      }
    };
  
    getAllLocation();
  }, [apiUrl]); 


  const handleClick =()=>{
    setOpenSlider((props)=>!props)
  }
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
            onClick={handleClick}
          />
         {openSlider && (
            <Slider
              isOpen={openSlider}
              onClose={() => setOpenSlider((props) => !props)}
            />
          )}
        </div>
      </div>
      <div id="map" className="border border-[#C9C2B6] rounded-[20px] w-full h-[678px] flex items-center justify-center">
            <GoogleMapComponent businesses={location}/>
      </div>
    </div>
  );
}
