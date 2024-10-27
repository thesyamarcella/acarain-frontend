import { Event } from '../types';

export const fetchEvents = async (): Promise<Event[]> => {
  const response = await fetch('http://localhost:8080/api/events'); 
  if (!response.ok) {
    throw new Error('Failed to fetch events');
  }
  return response.json();
};
