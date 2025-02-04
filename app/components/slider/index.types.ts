export interface formData {
    address: string;
    businessName: string;
    businessProfilePicture: string;
  }


  export interface ToastPositionProps {
    position?:
      | "top-right"
      | "top-center"
      | "top-left"
      | "bottom-right"
      | "bottom-center"
      | "bottom-left";
    autoClose?: number; // Duration in milliseconds
    hideProgressBar?: boolean;
    closeOnClick?: boolean;
    pauseOnHover?: boolean;
    draggable?: boolean;
    progress?: number;
    theme?: "light" | "dark" | "colored";
  }
  
  