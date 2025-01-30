Bundo

 The project is designed to be responsive across four major screen sizes: 1440px, 1024px, 768px, and 425px.

Features
1. Landing Page
Displays a grid of vendor cards.

Each card includes:

Vendor name.

Brief description of services.

Category.

Rating.

Location.

Responsive design optimized for:

Large screens (1440px).

Laptops (1024px).

Tablets (768px).

Mobile devices (425px).

2. Map Display Page
Displays vendor locations on a Google Map using latitude and longitude.

Fetches vendor locations from the Bundo API:

GET /Stage/ - Retrieves a list of vendor locations.

POST /Stage/ - Creates a new vendor location.

Updates the map dynamically when a new location is added.

Technologies Used
Frontend:

React.js (with TypeScript).

Tailwind CSS (for styling).

Google Maps JavaScript API (for map integration).

Backend:

Bundo API (external API for vendor data).

Tools:

Axios (for API requests).

Postman (for API testing).

Vite (for project scaffolding).

Implementation Details
1. Landing Page
Vendor Card Grid:

Each vendor card is dynamically rendered using data fetched from the Bundo API.

The grid layout adjusts based on the screen size using Tailwind CSS's responsive utilities.

Responsive Design:

Tailwind CSS classes like grid-cols-1, md:grid-cols-2, lg:grid-cols-3, and xl:grid-cols-4 are used to create a responsive grid layout.

2. Map Display Page
Google Maps Integration:

The @react-google-maps/api library is used to render the map.

Vendor locations are displayed as markers on the map using latitude and longitude from the API response.

API Integration:

A GET request fetches the list of vendor locations.

A POST request allows users to add a new vendor location.

The map updates dynamically when a new location is added.

Setup Instructions
1. Prerequisites
Node.js (v16 or higher).

npm or yarn.

Google Maps API key (follow this guide to obtain one).

2. Installation
Clone the repository:

bash
Copy
git clone https://github.com/your-username/bundo.git
Navigate to the project directory:

bash
Copy
cd bundo
Install dependencies:

bash
Copy
npm install
Create a .env.local file in the root directory and add your Google Maps API key:

env
Copy
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key_here
3. Running the Project
Start the development server:

bash
Copy
npm run dev
Open your browser and navigate to http://localhost:3000.

API Endpoints
1. Get Vendor Locations
Endpoint: GET https://qtg9k1vhp3.execute-api.us-west-2.amazonaws.com/Stage/

Response:

json
Copy
[
  {
    "id": 1,
    "name": "Vendor A",
    "description": "Provides excellent services.",
    "category": "Food",
    "rating": 4.5,
    "latitude": 37.7749,
    "longitude": -122.4194
  }
]
2. Create Vendor Location
Endpoint: POST https://qtg9k1vhp3.execute-api.us-west-2.amazonaws.com/Stage/

Request Body:

json
Copy
{
  "name": "Vendor B",
  "description": "New vendor offering great services.",
  "category": "Retail",
  "rating": 4.0,
  "latitude": 34.0522,
  "longitude": -118.2437
}
Response:

json
Copy
{
  "message": "Location created successfully",
  "id": 2
}
Responsive Design
Screen Sizes
1440px (Large screens):

4 columns in the vendor card grid.

1024px (Laptops):

3 columns in the vendor card grid.

768px (Tablets):

2 columns in the vendor card grid.

425px (Mobile devices):

1 column in the vendor card grid.

Error Handling
Invalid API Key:

Ensure the Google Maps API key is valid and properly configured in .env.local.

API Request Failures:

Errors during API requests are logged to the console for debugging.

Future Improvements
Add search and filter functionality for vendor categories.

Implement user authentication for adding/editing vendor locations.

Add pagination for the vendor card grid.

Contributing
Contributions are welcome! Please follow these steps:

Fork the repository.

Create a new branch for your feature or bugfix.

Submit a pull request with a detailed description of your changes.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgments
Thanks to the Bundo API for providing the vendor data.

Special thanks to Google Maps for the map integration.

