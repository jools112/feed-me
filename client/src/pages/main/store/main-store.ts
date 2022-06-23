import create from "zustand";
import { ReviewModel } from "@shared/models/review";

interface MainState {
  reviews: Array<ReviewModel>;
}

const initialState: MainState = {
  reviews: [],
};

export const useMainStore = create<MainState>(() => initialState);
