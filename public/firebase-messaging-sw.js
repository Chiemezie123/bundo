// public/firebase-messaging-sw.js
importScripts("https://www.gstatic.com/firebasejs/10.3.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.3.1/firebase-messaging-compat.js");

const firebaseConfig = {
    apiKey:"AIzaSyDWI-nn-XuigP-pAcIOgGseC9LnguIuZz4",
    authDomain:"bundo-b3b14.firebaseapp.com",
    projectId:"bundo-b3b14",
    storageBucket:"bundo-b3b14.firebasestorage.app",
    messagingSenderId:"111875441799",
    appId:"G-RF8PJQFE1V",
    measurementId:"BD_C4g3Vj6utXRB0x7adDiU5dkwh9UkW4N0pnvzKsbXNgjTYMrZ7F6j0eKJFI0604m6KEqoWyRXhhRxWou1CGx0",
  };


firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();


messaging.onBackgroundMessage((payload) => {
  console.log("Received background message:", payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/icons/icon-192x192.png", 
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});