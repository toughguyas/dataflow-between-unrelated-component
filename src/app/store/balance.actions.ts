import { createAction, props } from "@ngrx/store";

export const deposit = createAction('[balance] deposit', props<{userInput : number}>());
export const withdrawal = createAction('[balance] withdrawal', props<{userInput : number}>());
