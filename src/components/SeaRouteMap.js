import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
  Line
} from "react-simple-maps";

const MapChart = () => {
  return (
    <div>
    <ComposableMap
      projection="geoEqualEarth"
      projectionConfig={{
        scale: 420,
        center: [-40, 30]
      }}
    >
      <Graticule stroke="#DDD" />
      <Geographies
        geography="/features.json"
        fill="#D6D6DA"
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Line
        from={[2.3522, 48.8566]}
        to={[-74.006, 40.7128]}
        stroke="#FF5533"
        strokeWidth={4}
        strokeLinecap="round"
      />
    </ComposableMap>
    </div>
  );
};

export default MapChart;
