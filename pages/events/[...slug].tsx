import EventList from "../../components/event/event-list";
import { getFilteredEvents } from "../../data";

function FilteredEventsPage() {
    const dateFilter = 
    const event = getFilteredEvents(dateFiltered)
    
    return (
        <div>
            <EventList item={event}/>
        </div>
    );
}

export default FilteredEventsPage;