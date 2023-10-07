import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import geoData from "./resources/geo.json";
import properties from "./resources/properties.json";
import { scaleLinear } from "d3-scale";

const MapChart = () => {
  //@ts-ignore
  const colorScale = scaleLinear().domain([0, 51]).range(["#FFF", "#06F"]);
  const showPopUpHandler = (x: any) => {
    console.log(x);
  };
  return (
        <ComposableMap>
          <Geographies geography={geoData}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  // @ts-ignore
                  fill={colorScale(properties[geo.id as keyof typeof properties] ?? 0)}
                  onMouseOver={() => showPopUpHandler(geo.id)}
                />
              ))
            }
          </Geographies>
        </ComposableMap>
  );
};
export default MapChart;
