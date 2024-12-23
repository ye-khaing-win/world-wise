import classNames from 'classnames';
import { SelectDimension, SelectVariant } from './types';

export const selectVariant: {
  [key in SelectVariant]: {
    general: string;
    validation: string;
  };
} = {
  outlined: {
    general: classNames(
      'outline outline-1 outline-grey-500/20',
      'group-focus-within/field-wrap:outline-2 group-focus-within/field-wrap:outline-grey-800'
    ),
    validation: classNames(),
  },
};

export const selectDimension: {
  [key in SelectDimension]: string;
} = {
  default: classNames('h-14', 'p-4 pr-8', 'text-sm'),
};

export const selectDefaultStyles = classNames(
  'cursor-pointer',
  'border-none',
  'rounded-lg',
  'text-grey-800'
);
