// firebase.js
import { initializeApp } from "firebase/app";
import { onMessage, getMessaging, getToken, isSupported  } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyDWI-nn-XuigP-pAcIOgGseC9LnguIuZz4",
    authDomain: "bundo-b3b14.firebaseapp.com",
    projectId: "bundo-b3b14",
    storageBucket: "bundo-b3b14.firebasestorage.app",
    messagingSenderId: "111875441799",
    appId: "1:111875441799:web:f6ed0f0ddf0c7d2e592422",
    measurementId: "G-RF8PJQFE1V"
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