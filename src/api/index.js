import axios from "axios";

export const getPolyline = async (startPoint, finishPoint) => {
  try {
    const response = await axios.get(
      `https://graphhopper.com/api/1/route?point=${startPoint.join(
        ","
      )}&point=${finishPoint.join(
        ","
      )}&profile=car&locale=ru&points_encoded=false&key=c95bc167-d0a2-40ae-a556-2000b36f810d`
    );

    const coordinates = response.data?.paths[0]?.points?.coordinates;

    if (coordinates) return coordinates;

    return null;
  } catch {
    return null;
  }
};
