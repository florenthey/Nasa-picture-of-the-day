import { useEffect, useState } from "react";
import Meta from "@components/core/Meta";
import { format } from "date-fns";
import { getDefaultPicture, getPicture } from "@services/picture";
import { DatePicker } from "@mui/lab";
import { TextField } from "@mui/material";
import { useQuery, UseQueryResult } from "react-query";
import Picture from "@components/picture/Picture";
import { PictureDay } from "@utils/interfaces";

const meta = {
  name: "Eleven Labs X NASA - Image spatiale du jour",
  description:
    "Site web d'Eleven Labs affichant l'image spatiale du jour proposé par la NASA ",
};

const now = Date.now();
const date = format(now, "yyyy-MM-dd");

export default function Home({ picture }: PictureDay) {
  const [pictureDay, setPictureDay] = useState(picture);
  const [userValue, setUserValue] = useState(date);

  const { error, data: newPicture }: UseQueryResult<PictureDay> =
    useQuery<PictureDay>(["get-day-picture", userValue], () =>
      getPicture(userValue).then((response) => response)
    );

  useEffect(() => {
    if (newPicture !== undefined) {
      setPictureDay(newPicture);
    }
  }, [newPicture]);

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <Meta meta={meta} />
      <h1>ELEVEN LABS X NASA</h1>
      <DatePicker
        value={userValue}
        label="Choisir une date"
        onChange={(newValue) => {
          const formatUserValue = format(newValue, "yyyy-MM-dd");
          setUserValue(formatUserValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
      <Picture picture={pictureDay} />
    </>
  );
}

export async function getStaticProps() {
  const picture = await getDefaultPicture().then((response) => response);

  return {
    props: {
      picture,
    },
  };
}
