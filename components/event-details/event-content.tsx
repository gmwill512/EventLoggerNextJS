import classes from './event-content.module.css';
type Props = {
  children: JSX.Element;
};

const EventContent: React.FC<Props> = (props) => {
  return <section className={classes.content}>{props.children}</section>;
};

export default EventContent;
