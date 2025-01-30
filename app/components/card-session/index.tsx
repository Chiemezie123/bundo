"use client";
import React from "react";
import { listingCard } from "@/constants/data";
import Cards from "./cards";
import { Typography } from "@/components/typography";

export default function CardSession() {
  return (
    <div className="mt-[56px] max-w-[1214.833px] mx-auto flex flex-col gap-[25px] pb-[100px] mxs:mt-[48px] mlg:px-[24px] mxs:pb-[50px]">
      <div className="flex items-center gap-[20px] mxs:justify-between">
        <div >
            <Typography variant="h-xs" font="sans" fontWeight="semibold" color="mine-shaft-950" className="leading-[26.25px] mxs:hidden">Explore a wide range of Vendors</Typography>
            <Typography variant="h-xs" font="sans" fontWeight="semibold" color="mine-shaft-950" className="leading-[26.25px] md:hidden">Have you checked out these Vendors🔥😍</Typography>
        </div>
        <div>
            <Typography font="sans" color="mine-shaft-900" fontWeight="medium" variant="c-l" className="underline decoration-solid decoration-slice decoration-auto underline-offset-auto">see all</Typography>
        </div>
      </div>
      <div className="grid grid-cols-1 mxs:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {listingCard?.length > 0 ? (
          listingCard.map((items, index) => (
            <Cards
              key={items.id ?? index} // Use `id` if available
              image={items.image ?? "/default-image.png"} // Ensure valid image
              brandName={items.brandName}
              tags1={items.tags1}
              tags2={items.tags2}
              tags3={items.tags3}
              description={items.description}
              location={items.location}
              reviews={items.reviews}
            />
          ))
        ) : (
          <p className="col-span-full text-center">No listings available</p>
        )}
      </div>
    </div>
  );
}
