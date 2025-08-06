import { createReducer, on } from "@ngrx/store";
import { deposit, withdrawal } from "./balance.actions";
export const initialBalance = 1000;

export const transaction = createReducer(
    initialBalance,
    on(deposit, (state, {userInput}) => state + userInput ),
    on(withdrawal, (state, {userInput}) => state - userInput  )
);