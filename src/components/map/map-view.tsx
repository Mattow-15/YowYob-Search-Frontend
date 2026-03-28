'use client';

import React from 'react';
import { MapContainer as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default markers in Leaflet
delete (Icon.Default.prototype as any)._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: '/leaflet/images/marker-icon-2x.png',
  iconUrl: '/leaflet/images/marker-icon.png',
  shadowUrl: '/leaflet/images/marker-shadow.png',
});

interface MapViewProps {
  center: [number, number];
  zoom: number;
  markers: Array<{
    id: string;
    position: [number, number];
    title: string;
    description?: string;
  }>;
}

export const MapView: React.FC<MapViewProps> = ({
  center,
  zoom,
  markers,
}) => {
  // Custom icon for markers
  const customIcon = new Icon({
    iconUrl: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iIzA2NjZGRiI+PHBhdGggZD0iTTEyIDJDNy41ODMgMiA0IDUuNTgzIDQgMTBjMCA1LjIxMyA3IDEwIDggMTBzOC00Ljc4NyA4LTEwYzAtNC40MTctMy41ODMtOC04LTh6bTAgMTJhNCA0IDAgMTEtMC0wIDQgNCAwIDAxMCAweiIvPjwvc3ZnPg==',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  return (
    <LeafletMap
      center={center}
      zoom={zoom}
      className="h-full w-full"
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      {markers.map((marker) => (
        <Marker
          key={marker.id}
          position={marker.position}
          icon={customIcon}
        >
          <Popup className="rounded-lg shadow-lg">
            <div className="p-2">
              <h3 className="font-semibold text-gray-900">{marker.title}</h3>
              {marker.description && (
                <p className="text-sm text-gray-600 mt-1">{marker.description}</p>
              )}
            </div>
          </Popup>
        </Marker>
      ))}
    </LeafletMap>
  );
};

export default MapView;