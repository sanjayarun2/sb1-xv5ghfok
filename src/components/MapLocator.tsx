import React, { useEffect, useRef } from 'react';
import { APIProvider, Map, AdvancedMarker, Pin, useMap } from '@vis.gl/react-google-maps';
// This registers the search bar (place-picker) component
import '@googlemaps/extended-component-library/place_picker.js';
import '@googlemaps/extended-component-library/api_loader.js';

const StoreLocator = () => {
  // YOUR PROVIDED API KEY
  const API_KEY = "AIzaSyBK2judK1UoHIAqacFYeyw9lTUojJjNVeE"; 
  
  // DEBUG LINE: This will confirm in your browser console that the key is loaded
  console.log("Google Maps API Key being used:", API_KEY);

  // NOTE: Replace 'DEMO_MAP_ID' with a real ID from your "Map Management" console 
  // to enable Advanced Markers and remove watermarks.
  const MAP_ID = "daa5ca8abf0bde4d70f436d4"; 

  // ENTER YOUR ACTUAL COORDINATES HERE
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

  // --- FIX: Logic to make the Auto-suggest work ---
  const map = useMap();
  const pickerRef = useRef<any>(null);

  useEffect(() => {
    const picker = pickerRef.current;
    if (!picker || !map) return;

    // This listens for when you click a suggestion in the search bar
    const handlePlaceChange = () => {
      const selectedPlace = picker.value;
      if (selectedPlace && selectedPlace.location) {
        map.panTo(selectedPlace.location);
        map.setZoom(15);
      }
    };

    picker.addEventListener('gmpx-placechange', handlePlaceChange);
    return () => picker.removeEventListener('gmpx-placechange', handlePlaceChange);
  }, [map]);
  // ----------------------------------------------

  return (
    <div className="h-[500px] w-full rounded-xl overflow-hidden shadow-2xl border border-gray-200">
      <APIProvider 
        apiKey={API_KEY} 
        solutionChannel="GMP_GE_mapsandplacesautocomplete_v2"
        onLoad={() => console.log("Google Maps API loaded successfully!")}
        onError={(error) => console.error("Google Maps Load Error:", error)}
      >
        <Map
          defaultCenter={locations[0].pos}
          defaultZoom={13}
          mapId={MAP_ID}
          disableDefaultUI={false}
          mapTypeControl={false}
        >
          {/* SEARCH BAR (Place Picker) */}
          <div slot="control-block-start-inline-start" className="p-4">
            <gmpx-place-picker 
              ref={pickerRef} // Added reference for the fix
              placeholder="Search near premiumpacking.in" 
              style={{ 
                width: '300px', 
                height: '45px',
                backgroundcolor: 'white',
                display: 'block'
              }} 
            />
          </div>

          {/* RETAIL SHOP MARKER (Gold) */}
          <AdvancedMarker position={locations[0].pos} title={locations[0].name}>
            <Pin background={'#FBBC04'} glyphColor={'#000'} borderColor={'#000'} />
          </AdvancedMarker>

          {/* MANUFACTURING PLANT MARKER (Blue) */}
          <AdvancedMarker position={locations[1].pos} title={locations[1].name}>
            <Pin background={'#4285F4'} glyphColor={'#fff'} borderColor={'#000'} />
          </AdvancedMarker>

        </Map>
      </APIProvider>
    </div>
  );
};

export default StoreLocator;