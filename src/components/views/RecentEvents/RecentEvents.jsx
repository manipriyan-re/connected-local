import React from "react";
import Image from "next/image";
import eventCancelation from "../../../../public/images/icons/event-cancelation.svg";

const events = [
  {
    id: 1,
    icon: eventCancelation,
    title: "Cancelled Prime RE Subscription",
    date: "19 Nov, 2024",
  },
  {
    id: 2,
    icon: eventCancelation,
    title: "Activated Premium Subscription",
    date: "18 Nov, 2024",
  },
  {
    id: 3,
    icon: eventCancelation,
    title: "Subscription Renewal Completed",
    date: "17 Nov, 2024",
  },
  {
    id: 4,
    icon: eventCancelation,
    title: "Trial Subscription Started",
    date: "16 Nov, 2024",
  },
  {
    id: 5,
    icon: eventCancelation,
    title: "Plan Upgrade Successful",
    date: "15 Nov, 2024",
  },
  {
    id: 6,
    icon: eventCancelation,
    title: "Subscription Expired",
    date: "14 Nov, 2024",
  },
  {
    id: 7,
    icon: eventCancelation,
    title: "Cancelled Free Trial",
    date: "13 Nov, 2024",
  },
];

const RecentEvents = () => {
  return (
    <div>
      {events.map((event) => (
        <div key={event.id} className="recent_event_detail_row flex">
          <div className="recent_event_detail_icon">
            <Image src={event.icon} alt={event.title} width={20} height={20} />
          </div>
          <div className="recent_event_detail_description">
            <div className="recent_event_detail_title">
              <p>{event.title}</p>
            </div>
            <div className="recent_event_detail_time">{event.date}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentEvents;
