import { useMap } from "react-leaflet/hooks";

const UpdateSize = ({ _ }) => {
  const map = useMap();
  map.invalidateSize();

  return null;
};

export default UpdateSize;
