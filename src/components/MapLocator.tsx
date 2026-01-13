import React, { useEffect, useRef, useState } from 'react';
import { APIProvider, Map, AdvancedMarker, Pin, useMap, useMapsLibrary } from '@vis.gl/react-google-maps';

const StoreLocator = () => {
  const API_KEY = "AIzaSyBK2judK1UoHIAqacFYeyw9lTUojJjNVeE"; 
  const MAP_ID = "daa5ca8abf0bde4d70f436d4"; 
  
  const locations = [
    { id: 'shop', name: 'Retail Shop', pos: { lat: 11.608279167081387, lng: 78.00204346846581 } },
    { id: 'plant', name: 'Manufacturing Plant', pos: { lat: 11.6750, lng: 78.1550 } }
  ];

  return (
    <div className="h-[500px] w-full rounded-xl overflow-hidden shadow-2xl border border-gray-200">
      <APIProvider apiKey={API_KEY} libraries={['places', 'marker']}>
        <Map
          defaultCenter={locations[0].pos}
          defaultZoom={13}
          mapId={MAP_ID}
          disableDefaultUI={false}
          mapTypeControl={false}
        >
          {/* THE SEARCH COMPONENT */}
          <PlaceAutocomplete onPlaceSelect={(place) => console.log(place)} />

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

// --- THIS IS THE OTHER METHOD LOGIC (WORKING AUTO-SUGGEST) ---
const PlaceAutocomplete = ({ onPlaceSelect }: { onPlaceSelect: (place: google.maps.places.PlaceResult | null) => void }) => {
  const map = useMap(); //
  const places = useMapsLibrary('places'); //
  const inputRef = useRef<HTMLInputElement>(null);
  const [autocomplete, setAutocomplete] = useState<google.maps.places.Autocomplete | null>(null);

  useEffect(() => {
    if (!places || !inputRef.current) return;

    const options = {
      fields: ['geometry', 'name', 'formatted_address'],
      componentRestrictions: { country: 'in' } // Restricts search to India
    };

    const ac = new places.Autocomplete(inputRef.current, options);
    setAutocomplete(ac);
  }, [places]);

  useEffect(() => {
    if (!autocomplete || !map) return;

    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      
      if (place.geometry?.location) {
        map.panTo(place.geometry.location); //
        map.setZoom(15);
        onPlaceSelect(place);
      }
    });
  }, [autocomplete, map, onPlaceSelect]);

  return (
    <div className="absolute top-4 left-4 z-[1000]">
      <input
        ref={inputRef}
        placeholder="Search for your city or address..."
        className="w-[300px] h-[45px] px-4 rounded-lg shadow-lg border-none outline-none text-gray-700"
        style={{ backgroundColor: 'white' }}
      />
    </div>
  );
};

export default StoreLocator;