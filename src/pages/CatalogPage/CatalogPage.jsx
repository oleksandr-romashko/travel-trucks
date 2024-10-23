import { useSearchParams } from "react-router-dom";

const CatalogPage = () => {
  // const [searchParams, setSearchParams] = useSearchParams();
  const [searchParams] = useSearchParams();

  // location
  const location = searchParams.get("location");
  
  // equipment
  const hasAc = searchParams.has("ac");
  const hasAutoTransmission = searchParams.has("automatic");
  const hasKitchen = searchParams.has("kitchen");
  const hasTv = searchParams.has("tv");
  const hasBathroom = searchParams.has("bathroom");
  
  // vehicle type
  const vehicleType = searchParams.get("type");
  
  // Query example:
  // ?location=Kyiv,%20Ukraine&ac&automatic&kitchen&tv&bathroom&type=van
  return (
    <>
      <div>CatalogPage</div>
      <ul>
        <li>Location: { location }</li>
        <li>AC: { hasAc ? "true" : "false" }</li>
        <li>Automatic Transmission: { hasAutoTransmission ? "true" : "false" }</li>
        <li>Kitchen: { hasKitchen ? "true" : "false" }</li>
        <li>TV: { hasTv ? "true" : "false" }</li>
        <li>Bathroom: { hasBathroom ? "true" : "false" }</li>
        <li>Vehicle Type: { vehicleType }</li>
      </ul>
    </>
  );
};

export default CatalogPage;