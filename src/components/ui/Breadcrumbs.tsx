import classNames from 'classnames';
import { FC, HTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import capitalize from '../../utils/capitalize';

interface BreadcrumbsProps extends HTMLAttributes<HTMLDivElement> {
  separator?: ReactNode;
  className?: string;
  paths: string[];
}

const Breadcrumbs: FC<BreadcrumbsProps> = (props) => {
  const { separator, paths, className, ...rest } = props;
  return (
    <nav className={classNames('', className)} {...rest}>
      <ol className={classNames('flex items-center gap-4')}>
        {paths.map((path, index) => (
          <>
            {index !== 0 && (
              <li className="flex items-center">
                {separator ? (
                  separator
                ) : (
                  <span className="inline-block h-1 w-1 rounded-[50%] bg-grey-500" />
                )}
              </li>
            )}
            <li className="text-sm">
              {index === paths.length - 1 ? (
                <span className="text-grey-500">{capitalize(path)}</span>
              ) : (
                <Link to={`/${path}`}>{capitalize(path)}</Link>
              )}
            </li>
          </>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
