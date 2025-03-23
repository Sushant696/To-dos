import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

// Setup the localizer by providing the moment (or globalize, or Luxon) Object
// to the correct localizer.
const localizer = momentLocalizer(moment); // or globalizeLocalizer

const MyCalendar = () => (
  <div className="myCustomHeight" style={{ height: "700px",width:"1280px", marginLeft:"40px" }}>
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
    start: new Date(2024, 6, 24, 10, 0), // Note: months are 0-indexed in JavaScript Date
    end: new Date(2024, 6, 24, 12, 0),
  },
  {
    title: "Lunch Break",
    start: new Date(2024, 6, 23, 12, 0),
    end: new Date(2024, 6, 27, 13, 0),
  },
  {
    title: "Conference",
    start: new Date(2024, 5, 24, 9, 13),
    end: new Date(2024, 5, 24, 17, 0),
  },
];

export default MyCalendar;
