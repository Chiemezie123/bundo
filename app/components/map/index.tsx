'use client'
import React, { useEffect } from "react";
import { Button } from "@/components/button";
import { Typography } from "@/components/typography";
import EmptyState from "@/components/emptyLocationState";
import Plus from "@/assets/svg2/plus";
import GoogleMapComponent from "../googleMapComp";
import axios from "axios";

export default function Map() {

    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

//     useEffect(() => {
//   const getLocation = async () => {
//     try {
//       const response = await axios.get(apiUrl);
//       console.log(response, "bross");
//     } catch (error) {
//       console.error("Error fetching location data:", error);
//     }
//   };

//   getLocation();
// }, [apiUrl]); 

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
      <div id="map" className="border border-[#C9C2B6] rounded-[20px] w-full h-[678px] flex items-center justify-center">
            <GoogleMapComponent/>
      </div>
    </div>
  );
}
