"use client";
import React, { useRef, useEffect, useState } from "react";
import { Typography } from "@/components/typography";
import { Input } from "@/components/input";
import { Button } from "@/components/button";
import Search from "@/assets/svg2/search";
import Frame from "@/assets/svg2/frame";
import Close from "@/assets/svg2/close";
import { motion } from "framer-motion";
import { HomeModalProps } from "@/components/home-modal";
import {
  PlaceAutocompleteResult,
  PlaceData,
} from "@googlemaps/google-maps-services-js";
import { autocomplete, getPlaceDetails } from "@/libs/google";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { address, div } from "framer-motion/client";
import GreenLocationIcon from "@/assets/svg2/greenLocationIcon";
import { toastPosition } from "./data";



export default function Slider({ isOpen, onClose }: HomeModalProps) {
  const [predictions, setPredictions] = useState<PlaceAutocompleteResult[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [getPlaceDetail, setGetPlaceDetail] = useState<Partial<PlaceData> | null>(null);

  const [dataForm, setDataForm] = useState({
    id: "",
    address: "",
    businessName: "",
    businessProfilePicture: "",
    latitude: 0,
    longitude: 0,
    image: "",
  });

  useEffect(() => {
    const fetchPredictions = async () => {
      const predictions = await autocomplete(input);
      setPredictions(predictions ?? []);
    };
    fetchPredictions();
  }, [input]);

  const handleAddressSelect = async (placeId: string, description: string) => {
    try {
      const placeDetails = await getPlaceDetails(placeId);

      if (placeDetails) {
        setInput(description); 
        setGetPlaceDetail(placeDetails);
        console.log("Selected Address Details:", placeDetails);

        setPredictions([]);
      }
    } catch (error) {
      console.error("Error fetching place details:", error);
   
    }
  };



const handleFormSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsLoading(true);

  try {
    if (getPlaceDetail) {
      const {
        formatted_address,
        geometry: {
          location: { lat, lng },
        },
        icon,
        place_id,
      } = getPlaceDetail as PlaceData;

      setDataForm((prevState) => ({
        ...prevState,
        address: formatted_address ?? prevState.address,
        latitude: lat ?? prevState.latitude,
        longitude: lng ?? prevState.longitude,
        id: place_id ?? prevState.id,
        image: icon ?? prevState.image,
      }));
    }
  } catch (error) {
    console.error("Error updating form data:", error);
    toast.error("Failed to update form data", { ...toastPosition });
  } finally {
    setIsLoading(false);
  }
};


useEffect(() => {
  const submitData = async () => {
    if (!dataForm.address || !dataForm.latitude || !dataForm.longitude) {
      return; 
    }
    setIsLoading(true);

    try {
      const endpoint = "https://dny4au0opl.execute-api.us-west-2.amazonaws.com/Stage/";

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataForm),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log("Location created successfully:", responseData);

        toast.success("Successfully created", { ...toastPosition });

        setInput("");
        setDataForm({
          id: "",
          address: "",
          businessName: "",
          businessProfilePicture: "",
          latitude: 0,
          longitude: 0,
          image: "",
        });

        window.location.reload();
      } else {
        console.error("Failed to create location:", response.statusText);
        setInput("");
        setDataForm({
          id: "",
          address: "",
          businessName: "",
          businessProfilePicture: "",
          latitude: 0,
          longitude: 0,
          image: "",
        });
      }
    } catch (error:any) {
      console.error("Error creating location:", error);
      toast.error(error?.message || "Something went wrong", { ...toastPosition });
    } finally {
      setIsLoading(false);
    }
  };

  if (dataForm.address && dataForm.latitude && dataForm.longitude) {
    submitData();
  }
}, [dataForm]); // Run this effect whenever dataForm changes

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: isOpen ? "0%" : "100%" }}
      exit={{ x: "100%" }}
      transition={{ type: "tween", duration: 0.3 }}
      className="fixed top-0 right-0 border flex flex-col gap-8 z-50 w-[360px] h-screen bg-white shadow-lg"
    >
      <div className="border flex flex-col gap-[32px]">
        <div className="border bg-white shadow-[0px_3px_5px_rgba(9,30,66,0.2)] h-[59px] flex justify-end items-center px-[24px]">
          <button onClick={onClose}>
            <Close />
          </button>
        </div>
        <div className="flex flex-col gap-[32px] px-[24px] h-[calc(100vh-150px)] overflow-y-auto">
          <div>
            <Typography
              variant="h-m"
              color="mine-shaft-950"
              font="sans"
              fontWeight="medium"
              className="leading-normal"
            >
              Add New Business
            </Typography>
          </div>
          <form  onSubmit={handleFormSubmit} className="flex flex-col gap-[24px]">
            <div className="flex items-start flex-col gap-[24px]">
              <div className="w-full">
                <Input
                  name="address"
                  label="Enter Address"
                  placeholder="21b joy avenue Ajao Estate"
                  icon1={<Search />}
                  value={input}
                  onChange={(e) => {
                    setInput(e.target.value);
                  }}
                />
              </div>
              {predictions.length > 0 && (
                <div className="border w-full">
                  {predictions.map((items) => (
                    <div
                      key={items.place_id}
                      className="border cursor-pointer hover:bg-gray-100 p-2 flex items-center gap-2 px-[10px]"
                      onClick={() =>
                        handleAddressSelect(items.place_id, items.description)
                      } 
                    >
                      <GreenLocationIcon width="18px" height="18px" />
                      <Typography
                        variant="c-l"
                        color="mine-shaft-900"
                        font="sans"
                      >
                        {items.description}
                      </Typography>
                    </div>
                  ))}
                </div>
              )}
              <div className="w-full">
                <Input
                  name="businessName"
                  label="Business Name"
                  placeholder="Hair Ventures"
                  onChange={(e) => {
                    setDataForm((props) => ({
                      ...props,
                      businessName: e.target.value,
                    }));
                  }}
                />
              </div>
              <div className="w-full">
              </div>
            </div>
            <div className="flex flex-col gap-[32px]">
              <div className="w-full">
                <Input
                  name="businessProfilePicture"
                  label="Business Profile Picture"
                  placeholder="Image Link"
                  icon1={<Frame />}
                  onChange={(e) => {
                    setDataForm((props) => ({
                      ...props,
                      businessProfilePicture: e.target.value,
                    }));
                  }}
                />
              </div>
              <div>
                <Button
                  children={`${isLoading?"submitting..." : "save business"}`}
                  color="white"
                  className="text-c-l w-full"
                  type="submit"
                  disabled={isLoading}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
}
