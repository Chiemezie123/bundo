interface Location {
    coordinates: [number, number]; // Array of two numbers (longitude, latitude)
    type: "Point"; // Assuming the type is always "Point"
  }
  
  interface VendorStatus {
    // Define the structure of the objects inside the `vendor_status` array
    // Replace `any` with the actual structure if known
    [key: string]: any;
  }
  
  interface Business {
    address: string;
    business_profile_picture: string;
    business_type: string;
    categories: string[];
    createdAt: string; // ISO date string
    description: string;
    dist: {
      calculated: number;
    };
    location: Location;
    minutes_away: number;
    name: string;
    noOfLikes: number;
    plan: string;
    products_services: any[]; // Replace `any` with the actual type if known
    reviews: any[]; // Replace `any` with the actual type if known
    total_ratings: number;
    total_reviews: number;
    vendorId: string;
    vendor_status: VendorStatus[];
    visibility: boolean;
    _id: string;
  }

  export type BusinessArray = Business[];