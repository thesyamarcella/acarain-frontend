import { Event } from '../utils/types';

// Fetch all events
export const fetchEvents = async (): Promise<Event[]> => {
  try {
    const response = await fetch('http://localhost:8080/api/events');
    if (!response.ok) {
      throw new Error('Failed to fetch events');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching events:', error);
    throw error;
  }
};

// Fetch a single event by ID
export const fetchEventById = async (id: string): Promise<Event | null> => {
  try {
    const response = await fetch(`http://localhost:8080/api/events/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch event');
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching event with ID ${id}:`, error);
    return null; // Return null if event not found or error occurs
  }
};



export const createEvent = async (eventData: Omit<Event, 'id' | 'tickets' | 'reviews'>): Promise<Event> => {
  const response = await fetch('http://localhost:8080/api/events', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(eventData),
  });

  if (!response.ok) {
    throw new Error('Failed to create event');
  }

  return response.json();
};
