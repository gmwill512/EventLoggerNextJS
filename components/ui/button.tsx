import Link from 'next/link';
import classes from './buttons.module.css';
type Props = {
  children: string | JSX.Element | JSX.Element[];
  link?: string;
  onClick?: () => void;
};

const Button: React.FC<Props> = (props) => {
  if (props.link) {
    return (
      <Link href={props.link}>
        <a className={classes.btn}>{props.children}</a>
      </Link>
    );
  }
  return (
    <button className={classes.btn} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
