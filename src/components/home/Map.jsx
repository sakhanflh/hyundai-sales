import { useEffect } from "react";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export function Map() {
    const customIcon = L.icon({
        iconUrl: '/img/icons8-location-50.png',
        iconAnchor: [25, 50], 
    });

    useEffect(() => {
        const isMap = document.getElementById("map");
        if (isMap && !isMap._leaflet_id) {
            const map = L.map('map', {
                dragging: false,
            }).setView([-6.3795191952172985, 106.92299123756284], 15);
        
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
        
            L.marker([-6.3795191952172985, 106.92299123756284], {icon: customIcon }).addTo(map)
                // .bindPopup('Hyundai')
                .openPopup();
        }
    }, []);
    return (
        <div id="map" style={{width: '25rem', height: '20rem'}}></div>
    );
}