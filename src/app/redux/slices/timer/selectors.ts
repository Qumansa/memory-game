import { RootState } from "../..";

export const selectIsTimerActive = (state: RootState) => state.timer.isActive;