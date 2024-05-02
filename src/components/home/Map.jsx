import { useEffect, useState } from "react";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export function Map() {
    useEffect(() => {
        const isMap = document.getElementById("map");
        if (isMap && !isMap._leaflet_id) {
            const map = L.map('map', {
                dragging: false,
                zoomControl: false,
            }).setView([51.505, -0.09], 13);
        
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);
        
            L.marker([51.5, -0.09]).addTo(map)
                .bindPopup('Hyundai')
                .openPopup();
        }
    }, []);
    return (
        <div id="map" style={{width: '25rem', height: '20rem'}}></div>
    );
}