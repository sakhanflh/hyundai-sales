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
            }).setView([-6.379670147803483, 106.9230142724229], 10);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

            const markers = [
                { coords: [-6.380562191350076, 106.83076957566881], popupText: 'Hyundai Depok' },
                { coords: [-6.505775999693043, 106.84247525539928], popupText: 'Hyundai Cibinong' },
                { coords: [-6.39816600143047, 106.97530625024459], popupText: 'Hyundai Cileungsi' },
                { coords: [-6.283614828332154, 106.9280280098378], popupText: 'Hyundai Bekasi' },
                { coords: [-6.379670147803483, 106.9230142724229], popupText: 'Hyundai Cibubur' },
            ];

            markers.forEach(marker => {
                const mapMarker = L.marker(marker.coords, { icon: customIcon }).addTo(map)
                    .bindPopup(marker.popupText, { closeButton: true })
                    .openPopup();

                mapMarker.on('click', () => {
                    window.open(`https://www.google.com/maps/search/?api=1&query=${marker.coords[0]},${marker.coords[1]}`);
                    mapMarker.openPopup();
                });
            });
        }
    }, []);

    const openGoogleMaps = () => {
        const lat = -6.379663507560207;
        const lng = 106.92300451875207;
        window.open(`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`);
    };

    return (
        <div className="w-full px-2 z-10">
            <div id="map" className="map-desktop map-mobile"></div>
            <button className="pl-2" onClick={openGoogleMaps}>View Large Map on Google Maps</button>
        </div>
    );
}
