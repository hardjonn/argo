import * as moment from 'moment';

export enum JetModelEnum {
  gulfStream = 'Gulfstream G650',
  cessnaDragonfly = 'Cessna A-37 Dragonfly',
  cessnaEncore = 'Cessna Citation Encore',
}

export interface QuoteModel {
  ownerName: string;
  jetModel: string;
  seatCapacity: string;
  manufacturedDate: moment.Moment | string;
  purchasePrice: number;
  brokerEmail: string;
}

export const JetModelOptions = Object.values(JetModelEnum);

export interface QuoteApiModel {
  owner_name: string;
  model: string;
  seat_capacity: string;
  manufactured_date: string;
  purchase_price: number;
  broker_email: string;
}

export const quoteFieldsMap = {
  owner_name: 'ownerName',
  model: 'jetModel',
  seat_capacity: 'seatCapacity',
  manufactured_date: 'manufacturedDate',
  purchase_price: 'purchasePrice',
  broker_email: 'brokerEmail',
};

export interface QuoteResponseSuccess {
  annualPremium: number;
  quote: QuoteApiModel;
}

export interface QuoteResponseError {
  errorMessage: string;
  reasons: string[];
}
