import { useRouter } from 'next/router';
import { Fragment } from 'react';
import EventContent from '../../components/event-details/event-content';
import EventLogistics from '../../components/event-details/event-logistics';
import EventSummary from '../../components/event-details/event-summary';
import { getEventById } from '../../data';

function EventDetailPage() {
  const router = useRouter();
  const eventid = router.query.eventid;
  const event = getEventById(eventid);

  if (!event) {
    return <p>No Event Found</p>;
  }

  return (
    <div>
      <Fragment>
        <EventSummary title={event.title} />
        <EventLogistics
          date={event.date}
          address={event.location}
          image={event.image}
          imageAlt={event.title}
        />
        <EventContent>
          <p>{event.description}</p>
        </EventContent>
      </Fragment>
    </div>
  );
}

export default EventDetailPage;
