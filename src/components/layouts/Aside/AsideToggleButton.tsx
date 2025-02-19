import classNames from 'classnames';
import { HiMiniChevronLeft } from 'react-icons/hi2';
import useSettings from '../../../hooks/useSettings';

const AsideToggleButton = () => {
  const { onToggleAside, isAsideCollapsed } = useSettings();

  return (
    <button
      className={classNames(
        'p-1 rounded-full border border-dashed border-grey-500/30 bg-white',
        'top-8 fixed z-30',
        {
          'left-[266px]': !isAsideCollapsed,
          'left-[74px]': isAsideCollapsed,
        },
        'transition-all duration-300 ease-in-out'
      )}
      onClick={() => onToggleAside()}
    >
      <HiMiniChevronLeft />
    </button>
  );
};

export default AsideToggleButton;
