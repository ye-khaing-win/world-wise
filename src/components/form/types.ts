export type SelectChangeEvent =
  | (Event & { target: { value: string | string[] } })
  | React.ChangeEvent<HTMLInputElement>;

export type SelectVariant = 'outlined';
export type SelectDimension = 'default';
