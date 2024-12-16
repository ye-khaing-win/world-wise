import classNames from 'classnames';

const styles = {
  default: classNames(
    'py-1 px-3',
    'min-h-11',
    'flex items-center justify-center',
    'grow',
    'cursor-pointer',
    'overflow-hidden',
    'rounded-lg',
    'text-grey-600',
    'hover:bg-grey-600/[0.08]',
    // 'dark:hover:text-zinc-100',
    'transition-all duration-300 ease-in-out'
  ),
  activeRoot: classNames(
    'text-primary-main  bg-primary-main/[0.08] hover:bg-primary-main/[0.16]'
  ),
  activeSub: classNames('text-grey-800 bg-transparent hover:bg-grey-500/[0.08]'),
};

export default styles;
