import { StaticImageData } from "next/image";

export interface cardProps {
    image: StaticImageData;
    brandName: string;
    description: string;
    location:string;
    tags1:string;
    tags2:string;
    tags3:string;
    reviews:string
}


// {
//     brandName:"Beauty Hair",
//     timeText: "5 minutes away from you",
//     description:"Affordable and mouth watering food for all kinds of occasion. Fried rice, plantain......",
//     location:"Ikeja, Lagos",
//     tags1:"Cakes",
//     tags2:"Catering",
//     tags3:"Food",
//     reviews:"3 ratings and reviews"
// }