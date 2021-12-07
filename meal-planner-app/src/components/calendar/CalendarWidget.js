import react from 'react';
import Calendar from 'react-calendar';
import "../../../node_modules/react-calendar/dist/Calendar.css";
import "./CalendarWidget.css"
function CalendarWidget() {
  function dateClick(value, event) {
    console.log(value)
    alert(`clicked day: ${value}`);
  }
  return (
    <div className="main">
      <div className="calendar">
        <Calendar onChange={dateClick} />
        </div>
		</div>
	);
}
export default CalendarWidget;