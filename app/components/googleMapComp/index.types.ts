export type Business = {
  address: string;
  businessName: string;
  createdAt: string; 
  id: string;
  image: string; 
  lat: number;
  long: number;
  ttl: number; 
  updatedAt: string; 
};

// Array of Business objects
export type BusinessArray = Business[];