import { createStore } from "zustand";

export interface UserState {
  userName: string;
  userBirth: string;
}
export const initialState: UserState = {
  userName: "김로켓",
  userBirth: "1980년 8월 27일 08:10",
};

export const sajuStore = (init: UserState = initialState) => {
  return createStore<UserState>()(() => ({
    ...init,
  }));
};
