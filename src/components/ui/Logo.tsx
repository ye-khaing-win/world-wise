import classNames from "classnames";
import { FC } from "react";
import { Link } from "react-router-dom";

interface ILogoProps {
  className?: string;
}

const Logo: FC<ILogoProps> = (props) => {
  const { className } = props;
  return (
    <Link to="/">
      <div
        className={classNames(
          "w-10 h-10 inline-flex",
          className
        )}
      >
        <img
          src="/logo.png"
          alt="Brand logo"
          className={classNames("")}
        />
      </div>
    </Link>
  );
};

export default Logo;
