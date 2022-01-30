import Axios from "axios";

export interface Date {
  date: string;
}

const getDefaultPicture = async () => {
  try {
    const data = await Axios.get(
      `${process.env.NEXT_PUBLIC_API_NASA_APOD}?api_key=${process.env.NEXT_PUBLIC_API_NASA_APOD_KEY}`
    );
    console.log(data);
    return data.data;
  } catch (error) {
    console.error("error-get-default-picture", error);
  }
};

const getPicture = async (date) => {
  try {
    const data = await Axios.get(
      `${process.env.NEXT_PUBLIC_API_NASA_APOD}?api_key=${process.env.NEXT_PUBLIC_API_NASA_APOD_KEY}&date=${date}`
    );

    return data.data;
  } catch (error) {
    console.error("error-get-picture", error);
  }
};

export { getDefaultPicture, getPicture };
