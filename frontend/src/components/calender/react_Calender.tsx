import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

// Setup the localizer by providing the moment (or globalize, or Luxon) Object
// to the correct localizer.
const localizer = momentLocalizer(moment); // or globalizeLocalizer

const MyCalendar = () => (
  <div className="myCustomHeight" style={{ height: "700px",width:"1400px" }}>
    <Calendar
      localizer={localizer}
      events={myEventsList}
      startAccessor="start"
      endAccessor="end"
    />
  </div>
);

const myEventsList = [
  {
    title: "Meeting",
    start: new Date(2024, 5, 17, 10, 0), // Note: months are 0-indexed in JavaScript Date
    end: new Date(2024, 5, 17, 12, 0),
  },
  {
    title: "Lunch Break",
    start: new Date(2024, 5, 18, 12, 0),
    end: new Date(2024, 5, 18, 13, 0),
  },
  {
    title: "Conference",
    start: new Date(2024, 5, 19, 9, 0),
    end: new Date(2024, 5, 19, 17, 0),
  },
];

export default MyCalendar;
