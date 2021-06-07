import create from "zustand";
import { ReviewModel } from "@shared/models/review";

interface MainState {
  reviews: Array<ReviewModel>;
  selectedReview: ReviewModel | undefined;
  showDialog: boolean;
}

const initialState: MainState = {
  reviews: [],
  selectedReview: undefined,
  showDialog: false,
};

export const useMainStore = create<MainState>(() => initialState);
