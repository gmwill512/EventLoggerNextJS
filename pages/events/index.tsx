import EventList from '../../components/event/event-list';
import EventSearch from '../../components/event/events-search';
import { getAllEvents } from '../../data';

function EventsPage() {
  const events = getAllEvents();
  return (
    <div>
      <EventSearch />
      <EventList items={events} />
    </div>
  );
}

export default EventsPage;
