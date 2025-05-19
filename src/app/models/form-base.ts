export interface IControlBase<T> {
  value?: T;
  key?: string;
  label?: string;
  required?: boolean;
  order?: number;
  controlType?: string;
  type?: string;
  options?: { key: string; value: string }[];
}

export class ControlBase<T> {
  value: T | undefined;
  key: string;
  label: string;
  required: boolean;
  order: number;
  controlType: string;
  type: string;
  options: { key: string; value: string }[];

  constructor(options: IControlBase<T> = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.type = options.type || '';
    this.options = options.options || [];
  }
}
export class TextboxControl extends ControlBase<string> {
  override controlType = 'textbox';
  override type: string;

  constructor(options: IControlBase<string> = {}) {
    super(options);
    this.type = options.type || '';
  }
}

export class DropdownControl extends ControlBase<string> {
  override controlType = 'dropdown';
  override options: { key: string; value: string }[] = [];

  constructor(options: IControlBase<string> = {}) {
    super(options);
    this.options = options.options || [];
  }
}
