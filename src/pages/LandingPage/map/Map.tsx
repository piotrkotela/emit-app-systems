import { forwardRef, useState } from "react";
import MapChart from "../../../components/Map/MapChart";
import styles from "./Map.module.css";
// @ts-ignore
import MapLegend from "./MapLegend";

const IMEI_DESC = [
  "Industrial Methane Emission Index (IMEI) is a proprietary index showing the scale of methane emissions from industrial sources captured by EMIT.",
  "It is calculated on the basis of the magnitude of methane concentrations emitted from industrial smokestacks, the number of methane-emitting plants in the country and potential measurement error.",
  "The higher the index value is, the greater negative impact on global warming the country has.",
];

interface imeiCountry {
  country_name: string;
  imei_idx: number;
}

const Map = forwardRef<HTMLDivElement, {}>((_, ref) => {
  const [content, setContent] = useState<imeiCountry | undefined>(undefined);
  return (
    <div ref={ref} className={styles.mapContainer}>
      <div className={styles.mapLeft}>
        <p>map</p>
        <p>Industrial Methane Emission Index (IMEI)</p>
        <div className={styles.mapDescription}>
          {IMEI_DESC.map((desc) => (
            <p key={desc}>{desc}</p>
          ))}
        </div>
      </div>
      <div className={styles.mapRight}>
        <MapChart setImeiContent={setContent} />
        <div className={styles.mapRightDown}>
          <div className={content ? styles.imeiCountry : styles.imeiHidden}>
            <span>{content?.country_name}</span>
            <div className={content ? styles.imeiIdx : ""}>
              <span>{content?.imei_idx?.toFixed(0)}</span>
              <span>INDEX</span>
            </div>
          </div>
          <MapLegend />
        </div>
      </div>
    </div>
  );
});
export default Map;
