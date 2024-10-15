export interface Fields {
  name?: string;
  label?: string;
  controlType: string;
  controlName: string;
  inputType?: string;
  id?: string;
  pattern?: string;
  mask?: string;
  dropSpecialCharacters?: boolean;
  disabled?: boolean;
  maxlength?: number;
  minlength?: number;
  readonly?: boolean;
  required?: boolean;
  value?: any;
  checked?: boolean;
  options?: any;
  className?: string;
  placeholder?: string;
  isHidden?: boolean;
  isMultiple?: boolean; //For multi-select
  subQuestions?: Fields[];
}
