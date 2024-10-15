export interface TableConfig {
  objectData: Array<ObjectData>;
  tableClass: string;
  dataType: string;
  baseActions: Array<any>;
  buttonSettings?: Array<ButtonSettings>;
  isSearchable?: boolean;
  headerClass?: string;
  dataClass?: string;
}

export interface Searchable {
  inputType: string;
  inputClass: string;
  id: string;
  labelClass: string;
}

export interface ObjectData {
  headerKey: string;
  dataKey: string;
  isSortable?: boolean;
  isCollapsible?: boolean;
  type?: DataType;
}

export interface DataType {
  format?: PipeFormat;
  currencyCode?: string;
  currencyDisplay?: string;
  dateFormat?: string;
}

export interface DataKey {
  key: string;
  isCollapsible?: boolean;
  format?: PipeFormat;
}
export interface ButtonSettings {
  title: string;
  func: any;
  class?: string[];
  params?: Object;
}

export enum PipeFormat {
  DEFAULT, // 0
  CURRENCY, // 1
  DATE, // 2
  PERCENTAGE, // 3
}
