"use client";

import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import { calendarEvents } from "@/lib/data";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";

// Initialize the localizer
const localizer = momentLocalizer(moment);

const BigCalendar = () => {
  // Set initial view
  const [view, setView] = useState(Views.WORK_WEEK);

  // Handle view change
  const handleOnChangeView = (newView: any) => {
    setView(newView);
  };

  return (
    <Calendar
      localizer={localizer}
      events={calendarEvents}
      startAccessor="start"
      endAccessor="end"
      views={["work_week", "day"]} // You can also use `Views.WORK_WEEK` and `Views.DAY`
      view={view}
      style={{ height: "98%" }}
      onView={handleOnChangeView}
      // Uncomment and configure these if needed
      min={new Date(2025, 0, 1, 8, 0, 0)} 
      max={new Date(2025, 0, 1, 16, 0, 0)} 
    />
  );
};

export default BigCalendar;

