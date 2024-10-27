// components/EventCard.tsx
import React from 'react';
import { Event } from '../utils/types';
import Button from './Button';

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const isAvailable = event.ticketQuantity > 0;

  return (
    <div className="card rounded-lg shadow-lg overflow-hidden bg-white relative group">
      <div className="relative">
        <img 
          src="https://via.placeholder.com/300x200" 
          alt={event.name} 
          className="w-full h-48 object-cover rounded-lg mb-2"
        />
        <span className={`absolute top-2 right-2 text-xs font-bold px-2 py-1 rounded ${isAvailable ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
          {isAvailable ? 'Available' : 'Sold Out'}
        </span>
      </div>
      <div className="p-4">
        <p className="text-gray-500 text-sm">{new Date(event.dateTime).toLocaleDateString()}</p>
        <h3 className="font-bold text-lg">{event.name}</h3>
        <p className="text-gray-500 text-sm">{event.location}</p>
        <div className="flex justify-between items-center mt-3">
          <div className='flex justify-between mb-10'>
            <p className="font-semibold text-lg">${event.ticketPrice}</p>
            {isAvailable && <p className="text-gray-500 text-sm ml-28">{event.ticketQuantity} tickets available</p>}
          </div>

          {isAvailable && (
            <div className="absolute bottom-0 left-0 w-full p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Button label={`Book ${event.name} Now!`} className="w-full" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
