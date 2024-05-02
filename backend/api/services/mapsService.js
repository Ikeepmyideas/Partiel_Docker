const express = require('express');
const app = express();

app.use(express.json());


const axios = require('axios');



// Function to fetch the coordinates of a city using OpenStreetMap Nominatim API
async function getCoordinates(city) {
    city = JSON.stringify(city);
    console.log(city);
    try {
        const response = await axios.get(`https://nominatim.openstreetmap.org/search?city=${city}&country=France&format=json&limit=1`);
        const data = response.data;
        if (data.length > 0) {
            const { lat, lon } = data[0];
            return { latitude: parseFloat(lat), longitude: parseFloat(lon) };
        } else {
            throw new Error(`Coordinates not found for ${city}`);
        }
    } catch (error) {
        console.error('Error fetching coordinates:', error.message);
        throw error;
    }
}

// Function to calculate the distance between two coordinates using Haversine formula
function calculateDistance(coord1, coord2) {
    const R = 6371; // Radius of the Earth in km
    const dLat = (coord2.latitude - coord1.latitude) * (Math.PI / 180);
    const dLon = (coord2.longitude - coord1.longitude) * (Math.PI / 180);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(coord1.latitude * (Math.PI / 180)) * Math.cos(coord2.latitude * (Math.PI / 180)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in km
    return distance;
}

// List of cities
const cities = [
    'Paris', 'Marseille', 'Lyon', 'Toulouse', 'Nice',
    'Nantes', 'Strasbourg', 'Montpellier', 'Bordeaux',
    'Lille', 'Rennes', 'Reims', 'Le Havre', 'Saint-Étienne', 'Toulon'
];

const rayon = 280;

// Main function to find cities within a radius of Grouville
exports.findCitiesWithinRadiusOfCity = async (radius, cities, depart) => {
    const grouvilleCoords = await getCoordinates(depart);
    const citiesWithinRadius = [];

    for (const city of cities) {
        try {
            if(city.ville != null){
                const cityCoords = await getCoordinates(city.ville);
                const distance = calculateDistance(grouvilleCoords, cityCoords);
                if (distance <= radius) {
                    citiesWithinRadius.push(city.ville);
                }
            }
        } catch (error) {
            console.error(`Error processing city ${city.ville}:`, error.message);
        }
    }

    return citiesWithinRadius;
}

