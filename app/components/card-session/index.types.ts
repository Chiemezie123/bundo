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
