import { createAction, props } from '@ngrx/store';

export const loadBitcoin = createAction('[Bitcoin] Load Bitcoin', props<{ currency: string }>());
export const loadBitcoinSuccess = createAction('[User] Load Bitcoin Success', props<{ value: any }>());