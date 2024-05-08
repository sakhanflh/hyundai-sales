import { useEffect } from "react";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export function Map() {
    const customIcon = L.icon({
        iconUrl: '/img/icons8-location-50.png',
        iconAnchor: [25, 50], 
        popupAnchor: [0, -50],
    });

    useEffect(() => {
        const isMap = document.getElementById("map");
        if (isMap && !isMap._leaflet_id) {
            const map = L.map('map', {
                dragging: false,
            }).setView([-6.379670147803483, 106.9230142724229], 15);
            
        
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
        
            L.marker([-6.379670147803483, 106.9230142724229], {icon: customIcon }).addTo(map)
                .bindPopup('Hyundai Cibubur', { closeButton: false })
                .openPopup();
        }
    }, []);

    const openGoogleMaps = () => {
        const lat = -6.3795191952172985;
        const lng = 106.92299123756284;
        window.open(`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`);
    };

    return (
        <div className="w-full px-2">
            <div id="map" className="map-desktop map-mobile"></div>
            <button className="pl-2" onClick={openGoogleMaps}>View Large Map on Google Maps</button>
        </div>
    );
}