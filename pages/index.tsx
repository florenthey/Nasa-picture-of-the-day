import { useState } from "react";
import Meta from "@components/core/Meta";
import { getPictureByRange } from "@services/picture";

const meta = {
  name: "Eleven Labs X NASA - Image spatiale du jour",
  description:
    "Site web d'Eleven Labs affichant l'image spatiale du jour proposé par la NASA ",
};

export default function Home() {
  // const [dayPicture, setDayPicture] = useState();

  getPictureByRange({ start: "2022-01-01", end: "2022-01-26" });
  return (
    <>
      <Meta meta={meta} />
      <h1>ELEVEN LABS X NASA</h1>
    </>
  );
}
