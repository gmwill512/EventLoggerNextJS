import classes from './logistics-item.module.css';

type Props = {
  icon: any;
};

const LogisticsItem: React.FC<Props> = (props) => {
  const { icon: Icon } = props;

  return (
    <li className={classes.item}>
      <span className={classes.icon}>
        <Icon />
      </span>
      <span className={classes.content}>{props.children}</span>
    </li>
  );
};

export default LogisticsItem;
