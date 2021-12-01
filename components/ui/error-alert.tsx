import classes from './error-alert.module.css';

type Props = {
  children: JSX.Element;
  className?: string;
};

const ErrorAlert: React.FC<Props> = (props) => {
  return <div className={classes.alert}>{props.children}</div>;
};

export default ErrorAlert;
