import EventList from '../../components/event/event-list';
import EventSearch from '../../components/event/events-search';
import { EventType, getAllEvents } from '../../data';
import { useRouter } from 'next/router';

function EventsPage() {
  const events = getAllEvents();
  const router = useRouter();

  function findEventHandler(year?: string, month?: string): void {
    const fullPath = `events/${year}/${month}`;
    router.push(fullPath);
  }
  return (
    <div>
      <EventSearch onSearch={findEventHandler} />
      <EventList items={events} />
    </div>
  );
}

export default EventsPage;
