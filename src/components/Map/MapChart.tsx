import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import geoData from "./resources/geo.json";
import properties from "./resources/properties.json";
import { scaleLinear } from "d3-scale";

const MapChart = ({ setImeiContent }: any) => {
  //@ts-ignore
  const colorScale = scaleLinear().domain([0, 26]).range(["#2E2E2E", "#3705E4"]);
  return (
    <ComposableMap width={800} height={500}>
      <Geographies geography={geoData}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              onMouseEnter={() => {
                setImeiContent({
                  country_name: geo.properties.name,
                  imei_idx: (properties[geo.id as keyof typeof properties]) ?? 0,
                });
              }}
              onMouseLeave={() => {
                setImeiContent("");
              }}
              // @ts-ignore
              fill={colorScale(
                properties[geo.id as keyof typeof properties] ?? 0
              )}
              style={{
                hover: {
                  fill: "white",
                },
              }}
            />
          ))
        }
      </Geographies>
    </ComposableMap>
  );
};
export default MapChart;
