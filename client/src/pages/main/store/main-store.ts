import create from "zustand";
import { ReviewModel } from "@shared/models/review";

interface MainState {
  reviews: Array<ReviewModel>;
  selectedReview: ReviewModel | undefined;
  viewMore: boolean;
}

const initialState: MainState = {
  reviews: [],
  selectedReview: undefined,
  viewMore: false,
};

export const useMainStore = create<MainState>(() => initialState);
