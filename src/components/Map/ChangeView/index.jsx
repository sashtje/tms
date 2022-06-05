import { useMap } from "react-leaflet";

const ChangeView = ({ center }) => {
  const map = useMap();
  map.setView(center);

  return null;
};

export default ChangeView;
