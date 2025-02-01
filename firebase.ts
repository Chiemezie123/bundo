// firebase.js
import { initializeApp } from "firebase/app";
import { onMessage, getMessaging, getToken, isSupported  } from "firebase/messaging";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const messaging = async () => {
    const supported = await isSupported();
    console.log(supported, "checking brave")
    return supported ? getMessaging(app) : null;
  };
  
  export const fetchToken = async () => {

    try {
      const fcmMessaging = await messaging();
      if (fcmMessaging) {
        const token = await getToken(fcmMessaging, {
          vapidKey:"BD3aq6k0yhrmo9T2GxDUdnQ2DxRhW4-hf4FcDojRsTa4rlrDLynobBuXh6Q_9OSw3OvgcGVmlQtURHOXIMP0o8E",
        });
        return token;
      }
      return null;
    } catch (err) {
      console.error("An error occurred while fetching the token:", err);
      return null;
    }
  };
    
    export { app, messaging };







// export const onMessageListener = () =>
//     new Promise((resolve) => {
//       onMessage(messaging, (payload) => {
//         resolve(payload);
//       });
//     });




// Request permission and get token
// export const requestForToken = async () => {
//     try {
//         const permission = await Notification.requestPermission();
//         if (permission === "granted") {
//             const token = await getToken(messaging, {
//                 vapidKey: "YOUR_VAPID_KEY", // Get this from Firebase Console > Cloud Messaging
//               });
//               console.log("Token:", token);
//               return token;
//           } else {
//               console.error("Permission denied");
//           }
//       } catch (error) {
//           console.error("Error getting token:", error);
//       }
//   };