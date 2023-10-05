import { AppDispatch, AppRootStateType } from './store';

export interface AsyncThunkConfig {
  state: AppRootStateType;
  dispatch: AppDispatch;
  extra?: unknown;
  rejectValue: string;
  serializedErrorType?: unknown;
  pendingMeta?: unknown;
  fulfilledMeta?: unknown;
  rejectedMeta?: unknown;
}
export type ResponseSubmitFormType = {
  message: string;
};
export type RequestSubmitFormType = {
  realEstateValue: number;
  city: string;
  mortgageTime: string;
  initialPayment: number;
  propertyType: string;
  realEstateOwnership: string;
  deadline: number;
  monthlyPayment: number;
};
export type OptionType = {
  text: string;
};
