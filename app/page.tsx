'use client'
import React,{useEffect} from "react";
import NavBar from "./components/navbar";
import CardSession from "./components/card-session";
import FAQ from "./components/FAQ";
import Footer from "./components/footer";
import useFcmToken from "@/hooks/use-fcm";

export default function Home() {
  const { token, notificationPermissionStatus } = useFcmToken();

  useEffect(() => {
    // Register service worker
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/firebase-messaging-sw.js")
        .then((registration) => {
          console.log("Service Worker registered:", registration);
        })
        .catch((error) => {
          console.error("Service Worker registration failed:", error);
        });
    }},[]);

    const handleTestNotification = async () => {
      const response = await fetch("/send-notification", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: token || "",
          title: "Test Notification",
          message: "This is a test notification for bundo",
        }),
      });
  
      const data = await response.json();
      console.log(data);
    };
    


  return (
      <div className="pt-[20px]">
        <NavBar/>
        <CardSession token={token ?? ""} onClick={handleTestNotification}/>
        <FAQ/>
        <Footer/>
      </div>  
  );
}



