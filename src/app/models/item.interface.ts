import { IDate } from './date.interface';

export interface IItem {
  _id?: string;
  index?: number;
  isActive: boolean;
  picture?: string;
  name?: string;
  type?: string; //has to be Enum
  company?: string;
  link?: string;
  description?: string;
  date?: IDate;
  tags?: Array<number>;
}
