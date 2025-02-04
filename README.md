Bundo

Bundo is a web application that displays multiple business locations on a Google Map using markers. It allows users to create new business locations, update the map in real-time, and subscribe to push notifications via Firebase. The app is fully responsive and supports five major screen sizes: 1440px, 1024px, 768px, 425px, and 375px.


Features

1, Map Integration:

Displays the locations of various vendors fetched from a list of locations using the Google Places API.
Markers are dynamically added to the map based on the fetched data.

2,Create Location:

Users can create a new business location by entering an address in an input form.
The newly created location is added to the map and displayed alongside existing locations.

3,Push Notifications:
Integrated with Firebase Cloud Messaging (FCM) to send push notifications to users.
Users can grant permission to receive notifications from the app.
Notifications are triggered from the admin console or the app's GUI.


4,Responsive Design:
The app is optimized for five major screen sizes: 1440px, 1024px, 768px, 425px, and 375px.
Tech Stack:
Built with Next.js and TypeScript.
Custom components were used throughout the app, eliminating the need for a UI library.


HOW TO USE

clone the git repo

navigate to the directory where the repo was created i.e cd bundo

install of dependencies from the node package manager i.e npm install

and start the application.

for the push notification feature to work, you have to add your own firebase credentials to service worker and firebase file, this would create a connection between your firebase console and the application.

create an .env.local file ,store your credentials there, and apply it where it is needed.

for google map, go to google developer console and create your api key , replace the api key in the map configuration where the api keys are required

eg where you see process.env.GOOGLE_MAP_API_KEY, create a variable with the same name in .env.local file and passed to the required property.



Dependencies
All dependencies used in the project are listed in the package.json file. Key dependencies include:

Next.js: For server-side and client rendering and routing.

TypeScript: For type-safe development.

Firebase: For push notifications.

Google Maps API: For map integration and marker functionality.




Troubleshooting
If you encounter any issues while setting up or navigating the app:

Ensure all dependencies are installed correctly by running npm install.

Verify that your Firebase credentials are correctly configured for push notifications.

Check the browser console for any errors or warnings.

If you need further assistance, feel free to reach out to me via GitHub. I’ll respond as soon as possible!

