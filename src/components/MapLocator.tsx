import React, { useEffect, useRef, useState } from 'react';
import { APIProvider, Map, AdvancedMarker, Pin, useMap, useMapsLibrary } from '@vis.gl/react-google-maps';

const StoreLocator = () => {
  const API_KEY = "AIzaSyBK2judK1UoHIAqacFYeyw9lTUojJjNVeE"; 
  const MAP_ID = "daa5ca8abf0bde4d70f436d4"; 
  
  const locations = [
    { 
      id: 'elampillai', 
      name: 'Distribution Center (Elampillai)', 
      pos: { lat: 11.608279167081387, lng: 78.00204346846581 } 
    },
    { 
      id: 'sivakasi', 
      name: 'Main Factory (Sivakasi)', 
      pos: { lat: 11.6750, lng: 78.1550 } 
    }
  ];

  return (
    <div className="h-[500px] w-full rounded-xl overflow-hidden shadow-2xl border border-gray-200">
      <APIProvider apiKey={API_KEY} libraries={['places', 'marker']}>
        <Map
          defaultCenter={locations[0].pos} // Starts view at Elampillai
          defaultZoom={10} // Zoomed out slightly to see both regions if needed
          mapId={MAP_ID}
          disableDefaultUI={false}
          mapTypeControl={false}
        >
          {/* THE SEARCH COMPONENT */}
          <PlaceAutocomplete onPlaceSelect={(place) => console.log(place)} />

          {locations.map((loc) => (
            <AdvancedMarker key={loc.id} position={loc.pos} title={loc.name}>
              <Pin 
                background={loc.id === 'elampillai' ? '#FBBC04' : '#4285F4'} 
                glyphColor={'#000'} 
                borderColor={'#000'} 
              />
            </AdvancedMarker>
          ))}
        </Map>
      </APIProvider>
    </div>
  );
};

const PlaceAutocomplete = ({ onPlaceSelect }: { onPlaceSelect: (place: google.maps.places.PlaceResult | null) => void }) => {
  const map = useMap(); 
  const places = useMapsLibrary('places'); 
  const inputRef = useRef<HTMLInputElement>(null);
  const [autocomplete, setAutocomplete] = useState<google.maps.places.Autocomplete | null>(null);

  useEffect(() => {
    if (!places || !inputRef.current) return;

    const options = {
      fields: ['geometry', 'name', 'formatted_address'],
      componentRestrictions: { country: 'in' }, 
      
      // BIAS: Prioritizes results near Elampillai
      locationBias: { 
        lat: 11.608279167081387, 
        lng: 78.00204346846581 
      },
      // ORIGIN: Helps rank the closest branch first in the list
      origin: { 
        lat: 11.608279167081387, 
        lng: 78.00204346846581 
      }
    };

    const ac = new places.Autocomplete(inputRef.current, options);
    setAutocomplete(ac);
  }, [places]);

  useEffect(() => {
    if (!autocomplete || !map) return;

    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      
      if (place.geometry?.location) {
        map.panTo(place.geometry.location); // Moves map to selection
        map.setZoom(15);
        onPlaceSelect(place);
      }
    });
  }, [autocomplete, map, onPlaceSelect]);

  return (
    <div className="absolute top-4 left-4 z-[1000]">
      <input
        ref={inputRef}
        placeholder="Search for Elampillai or Sivakasi branch..."
        className="w-[350px] h-[50px] px-4 rounded-lg shadow-2xl border-2 border-blue-500 outline-none text-gray-800 font-bold"
        style={{ backgroundColor: 'white' }}
      />
    </div>
  );
};

export default StoreLocator;