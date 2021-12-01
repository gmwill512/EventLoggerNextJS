import { EventType } from '../../data';
import EventItem from './event-item';
import classes from './event-list.module.css';

type Props = {
  items: EventType[];
};

const EventList: React.FC<Props> = ({ items }) => {
  return (
    <ul className={classes.list}>
      {items.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          location={event.location}
          title={event.title}
          date={event.date}
          image={event.image}
        />
      ))}
    </ul>
  );
};

export default EventList;
