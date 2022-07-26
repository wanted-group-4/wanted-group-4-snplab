export interface IField {
  name: string;
  value: string;
  nodeName: string;
  checked?: boolean;
  focus: () => void;
}

export interface IRegexError {
  msg: string;
  statusCode: number;
  field: any;
}
