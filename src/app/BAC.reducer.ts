import { createReducer, on } from '@ngrx/store';
import { Interface } from 'node:readline';
import {addDrink,resetDrink, setBAC, loseBAC,lastDrank} from './BAC.actions';


export interface State{
  BAC:number,
  Drinks:number,
  LastDrink:number
}
export const initialState:State = {
  BAC: 0.00,
  Drinks:0,
  LastDrink:0
}

const _BACreducer = createReducer(
  initialState,
  on(addDrink, (state)=> ({...state,Drinks: state.Drinks +1}) ),
  on(resetDrink, (state)=>({...state,Drinks:0})),
  on(setBAC, (state,{BAC})=>({...state,BAC:BAC})),
  on(loseBAC, (state)=>({...state,BAC:state.BAC-0.02})),
  on(lastDrank, (state,{LastDrink})=>({...state,LastDrink:LastDrink}))
)

export function BACreducer(state,action){
  return _BACreducer(state,action)
}
