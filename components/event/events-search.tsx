import Button from '../ui/button';
import classes from './event-search.module.css';
import { useRef } from 'react';
import { months, EventType } from '../../data';

type Month = {
  value: string;
  name: string;
};

type Props = {
  onSearch: (selectedYear?: string, selectedMonth?: string) => void;
};

const EventSearch: React.FC<Props> = (props) => {
  const yearInputRef = useRef<HTMLSelectElement>(null);
  const monthInputRef = useRef<HTMLSelectElement>(null);

  function submitHandler(event: any) {
    event.preventDefault();
    if (
      (yearInputRef.current && yearInputRef.current.value) ||
      monthInputRef.current
    ) {
      const selectedYear = yearInputRef.current?.value;
      const selectedMonth = monthInputRef.current?.value;

      props.onSearch(selectedYear, selectedMonth);
    }
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>
          <select id="year" ref={yearInputRef}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month">Month</label>
          <select id="month" ref={monthInputRef}>
            {months.map((month: Month) => (
              <option key={month.value} value={month.value}>
                {month.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <Button>Find Events</Button>
    </form>
  );
};

export default EventSearch;
