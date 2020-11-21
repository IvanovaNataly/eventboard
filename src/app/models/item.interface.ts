import { IDate } from './date.interface';
import { ITags } from './tags.interface';

export interface IItem {
  _id?: string;
  index?: number;
  isActive: boolean;
  picture?: string;
  name?: string;
  type?: string; //has to be Enum
  publisher?: string;
  developer?: string;
  link?: string;
  description?: string;
  date?: IDate;
  tags?: ITags;
  multiple?: Array<IItem>;
  weekIndex?: number;
  class?: string;
}
