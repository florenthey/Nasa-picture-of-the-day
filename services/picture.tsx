import Axios from "axios";

interface PictureByRange {
  start: string;
  end: string;
}

const getPictureByRange = async ({ start, end }: PictureByRange) => {
  try {
    const data = await Axios.get(
      `${process.env.NEXT_PUBLIC_API_NASA_APOD}?api_key=${process.env.NEXT_PUBLIC_API_NASA_APOD_KEY}&start_date=${start}&end_date=${end}`
    );

    return data.data;
  } catch (error) {
    console.error("error-get-picture-by-range", error);
  }
};

export { getPictureByRange };
