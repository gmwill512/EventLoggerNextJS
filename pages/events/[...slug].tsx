import EventList from '../../components/event/event-list';
import { EventType, getAllEvents, getFilteredEvents } from '../../data';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import ResultsTitle from '../../components/event-details/results-title';
import Button from '../../components/ui/button';
import ErrorAlert from '../../components/ui/error-alert';

function FilteredEventsPage() {
  const router = useRouter();
  const filterData = router.query.slug;
  let events: EventType[] = [];

  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];
  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth > 12 ||
    numMonth < 1
  ) {
    return (
      <Fragment>
        <ErrorAlert>
          <p className="center">Invalid Filter Please Adjust Your Values</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p className="center">No Event Found For The Chosen Filters</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  } else {
    events = filteredEvents;
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <div>
      <Fragment>
        <ResultsTitle date={date} />
        <EventList items={events} />
      </Fragment>
    </div>
  );
}

export default FilteredEventsPage;
