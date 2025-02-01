"use client";

import { useEffect, useRef, useState } from "react";
import {onMessage, Unsubscribe } from "firebase/messaging";
import { fetchToken, messaging } from "@/firebase";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import { toast } from "sonner";

async function getNotificationPermissionAndToken() {
  // Step 1: Check if Notifications are supported in the browser.
  if (!("Notification" in window)) {
    console.info("This browser does not support desktop notification");
    return null;
  }

  // Step 2: Check if permission is already granted.
  if (Notification.permission === "granted") {
    return await fetchToken();
  }

  // Step 3: If permission is not denied, request permission from the user.
  if (Notification.permission !== "denied") {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      return await fetchToken();
    }
  }

  console.log("Notification permission not granted.");
  return null;
}

const useFcmToken = () => {
  const [notificationPermissionStatus, setNotificationPermissionStatus] = useState<NotificationPermission | null>(null); // State to store the notification permission status.
  const [token, setToken] = useState<string | null>(null); 
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
      const m = await messaging();
      if (!m) return;
  
      const unsubscribe = onMessage(m, (payload) => {
        if (Notification.permission !== "granted") return;
        console.log("Foreground push notification received:", payload);
  
        // Display notification using react-toastify
        if (payload.notification) {
          toast.info(
            <div>
              <strong>{payload.notification.title}</strong> {/* Title on top */}
              <p>{payload.notification.body}</p> {/* Body underneath */}
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
  
      return unsubscribe;
    };
  
    let unsubscribe: Unsubscribe | null = null;
  
    setupListener().then((unsub) => {
      if (unsub) {
        unsubscribe = unsub;
      }
    });
  
    // Cleanup the listener when the component unmounts
    return () => unsubscribe?.();
  }, [token]);
  

  return { token, notificationPermissionStatus }; // Return the token and permission status.
};

export default useFcmToken;
