import Button from '../ui/button';
import classes from './event-search.module.css';
import { useRef } from 'react';
import { months } from '../../data';

type Month = {
  value: string;
  name: string;
};

type Props = {};

const EventSearch: React.FC<Props> = (props) => {
  const yearInputRef = useRef<HTMLSelectElement>(
    document.createElement('select')
  );
  const monthInputRef = useRef<HTMLSelectElement>(
    document.createElement('select')
  );

  function submitHandler(event: any) {
    event.preventDefault();
    if (null !== yearInputRef.current || null !== monthInputRef.current) {
      const selectedYear = yearInputRef.current.value;
      const selectedMonth = monthInputRef.current.value;
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
      <Button>Fine Events</Button>
    </form>
  );
};

export default EventSearch;
