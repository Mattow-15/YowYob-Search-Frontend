/**
 * Simple Map Component (without Leaflet dependencies)
 * @author Matteo Owona, Rouchda Yampen
 * @date 2024-12-07
 */

'use client';

import React from 'react';

interface MapContainerProps {
  center?: [number, number];
  zoom?: number;
  markers?: Array<{
    id: string;
    position: [number, number];
    title: string;
    description?: string;
  }>;
  className?: string;
}

export const MapContainer: React.FC<MapContainerProps> = ({
  center = [3.848, 11.5021], // Yaoundé coordinates
  markers = [],
  className = 'h-[500px] w-full',
}) => {
  // Create OpenStreetMap URL
  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${center[1]-0.1},${center[0]-0.1},${center[1]+0.1},${center[0]+0.1}&layer=mapnik&marker=${center[0]},${center[1]}`;

  return (
    <div className={`${className} rounded-3xl overflow-hidden shadow-lg`}>
      <iframe
        src={mapUrl}
        className="w-full h-full border-0"
        title="Interactive Map"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      
      {/* Custom markers overlay (simplified) */}
      <div className="relative -mt-full pointer-events-none">
        {markers.map((marker) => (
          <div
            key={marker.id}
            className="absolute"
            style={{
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -100%)',
            }}
          >
            <div className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm font-medium shadow-lg">
              {marker.title}
            </div>
            <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-blue-600 mx-auto"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MapContainer;