import { useMainStore } from "./main-store";
import axios from "axios";
import { ReviewModel } from "@shared/models/review";
const { getState, setState } = useMainStore;

export const fetchClick = () => {
  const promise = axios.get<Array<ReviewModel>>(
    "http://localhost:8000/reviews"
  );
  promise.then((response) => {
    //fetchReviews(response.data);
    console.log("jetelyckad hämt");
    setState({ reviews: response.data });
  });
};

//const fetchReviews = (fetchedData: Array<ReviewModel>) =>
