import React, { useEffect, useRef } from 'react';
import { APIProvider, Map, AdvancedMarker, Pin, useMap } from '@vis.gl/react-google-maps';
// This registers the search bar (place-picker) component
import '@googlemaps/extended-component-library/place_picker.js';
import '@googlemaps/extended-component-library/api_loader.js';

// --- SUB-COMPONENT FOR SEARCH LOGIC ---
const MapEvents = ({ pickerRef }: { pickerRef: React.RefObject<any> }) => {
  const map = useMap(); // Now this will work because it's a child of <Map>

  useEffect(() => {
    const picker = pickerRef.current;
    if (!picker || !map) return;

    const handlePlaceChange = () => {
      const selectedPlace = picker.value;
      if (selectedPlace && selectedPlace.location) {
        map.panTo(selectedPlace.location);
        map.setZoom(15);
      }
    };

    picker.addEventListener('gmpx-placechange', handlePlaceChange);
    return () => picker.removeEventListener('gmpx-placechange', handlePlaceChange);
  }, [map, pickerRef]);

  return null;
};

const StoreLocator = () => {
  const API_KEY = "AIzaSyBK2judK1UoHIAqacFYeyw9lTUojJjNVeE"; 
  const MAP_ID = "daa5ca8abf0bde4d70f436d4"; 
  const pickerRef = useRef<any>(null);

  const locations = [
    { 
      id: 'shop', 
      name: 'Retail Shop', 
      pos: { lat: 11.608279167081387, lng: 78.00204346846581 } , 
    },
    { 
      id: 'plant', 
      name: 'Manufacturing Plant', 
      pos: { lat: 11.6750, lng: 78.1550 } 
    }
  ];

  return (
    <div className="h-[500px] w-full rounded-xl overflow-hidden shadow-2xl border border-gray-200">
      <APIProvider 
        apiKey={API_KEY} 
        // Force loading of places library
        libraries={['places']}
        solutionChannel="GMP_GE_mapsandplacesautocomplete_v2"
        onLoad={() => console.log("Google Maps API loaded successfully!")}
      >
        <Map
          defaultCenter={locations[0].pos}
          defaultZoom={13}
          mapId={MAP_ID}
          disableDefaultUI={false}
          mapTypeControl={false}
        >
          {/* This component handles the search movement */}
          <MapEvents pickerRef={pickerRef} />

          {/* SEARCH BAR (Place Picker) */}
          <div slot="control-block-start-inline-start" style={{ padding: '16px', zIndex: 9999 }}>
            <gmpx-place-picker 
              ref={pickerRef}
              placeholder="Search near premiumpacking.in" 
              style={{ 
                width: '300px', 
                height: '45px',
                backgroundColor: 'white',
                borderRadius: '8px',
                boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
                display: 'block',
                position: 'relative'
              }} 
            />
          </div>

          {locations.map((loc) => (
            <AdvancedMarker key={loc.id} position={loc.pos} title={loc.name}>
              <Pin background={loc.id === 'shop' ? '#FBBC04' : '#4285F4'} />
            </AdvancedMarker>
          ))}

        </Map>
      </APIProvider>
    </div>
  );
};

export default StoreLocator;