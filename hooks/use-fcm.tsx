"use client";

import { useEffect, useRef, useState } from "react";
import {onMessage, Unsubscribe } from "firebase/messaging";
import { fetchToken, messaging } from "@/firebase";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Typography } from "@/components/typography";
import { getNotificationPermissionAndToken } from "./helper";



const useFcmToken = () => {
  const [notificationPermissionStatus, setNotificationPermissionStatus] = useState<NotificationPermission | null>(null); // State to store the notification permission status.
  const [token, setToken] = useState<string | null>(""); 
  const retryLoadToken = useRef(0);
  const isLoading = useRef(false); 

  const loadToken = async () => {
    if (isLoading.current) return;

    isLoading.current = true; 
    const token = await getNotificationPermissionAndToken(); 

    if (Notification.permission === "denied") {
      setNotificationPermissionStatus("denied");
      console.info(
        "%cPush Notifications issue - permission denied",
        "color: green; background: #c7c7c7; padding: 8px; font-size: 20px"
      );
      isLoading.current = false;
      return;
    }

    if (!token) {
      if (retryLoadToken.current >= 3) {
        alert("Unable to load token, refresh the browser");
        console.info(
          "%cPush Notifications issue - unable to load token after 3 retries",
          "color: green; background: #c7c7c7; padding: 8px; font-size: 20px"
        );
        isLoading.current = false;
        return;
      }

      retryLoadToken.current += 1;
      console.error("An error occurred while retrieving token. Retrying...");
      isLoading.current = false;
      await loadToken();
      return;
    }

    setNotificationPermissionStatus(Notification.permission);
    setToken(token);
    isLoading.current = false;
  };



  useEffect(() => {
    if ("Notification" in window) {
      loadToken();
    }
  }, []);



  
  useEffect(() => {
    const setupListener = async () => {
        if (!token) return;
      
        console.log(`onMessage registered with token ${token}`);
      
        try {
          const m = await messaging();
          if (!m) return;
      
          const subscribe = onMessage(m, (payload) => {
            if (Notification.permission !== "granted") return;
            console.log("Foreground push notification received:", payload);
            if (payload.notification) {
              toast.info(
                <div>
                  <Typography>{payload.notification.title}</Typography>
                  <Typography>{payload.notification.body}</Typography>
                </div>,
                {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                }
              );
            }
          });
      
          return subscribe;
        } catch (error) {
          console.error("Error setting up onMessage listener:", error);
        }
      };
      
    let unsubscribe: Unsubscribe | null = null;
  
    setupListener().then((unsub) => {
      if (unsub) {
        unsubscribe = unsub;
      }
    });
  
    
    return () => unsubscribe?.();
  }, [token]);
  

  return { token, notificationPermissionStatus }; 
};

export default useFcmToken;
