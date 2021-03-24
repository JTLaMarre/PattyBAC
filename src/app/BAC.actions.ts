import { createAction, props } from '@ngrx/store';

export const addDrink = createAction('[CalcComponent Component] AddDrink');
export const resetDrink = createAction('[CalcComponent Component] ResetDrink');
export const setBAC = createAction('[CalcComponenet Component] SetBAC',props<{BAC:number}>())
export const loseBAC = createAction('[CalcComponent Component] LoseBAC');
export const lastDrank = createAction('[CalcComponent Componenet] LastDrank',props<{LastDrink:number}>())
