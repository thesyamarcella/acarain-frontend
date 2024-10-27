import React from 'react';

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  description: string;
  onBuyTickets: () => void;
}

const EventCard: React.FC<EventCardProps> = ({ title, date, location, description, onBuyTickets }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{date}</p>
      <p>{location}</p>
      <p>{description}</p>
      <button onClick={onBuyTickets}>Buy Tickets</button>
    </div>
  );
};

export default EventCard;
