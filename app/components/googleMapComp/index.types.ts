interface Location {
    coordinates: [number, number];
    type: "Point";
  }
  
  interface VendorStatus {
    [key: string]: any;
  }
  
  interface Business {
    address: string;
    business_profile_picture: string;
    business_type: string;
    categories: string[];
    createdAt: string; 
    description: string;
    dist: {
      calculated: number;
    };
    location: Location;
    minutes_away: number;
    name: string;
    noOfLikes: number;
    plan: string;
    products_services: any[]; 
    reviews: any[];
    total_ratings: number;
    total_reviews: number;
    vendorId: string;
    vendor_status: VendorStatus[];
    visibility: boolean;
    _id: string;
  }

  export type BusinessArray = Business[];