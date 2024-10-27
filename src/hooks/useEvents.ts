import { useEffect, useState } from 'react';
import { fetchEvents } from '../services/event'; 
import { Event } from '../utils/types'; 

export const useEvents = (initialEvents: Event[] = []) => {
  const [events, setEvents] = useState<Event[]>(initialEvents);
  const [error, setError] = useState<null | string>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const getEvents = async () => {
      setLoading(true);
      try {
        const data = await fetchEvents();
        setEvents(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    if (initialEvents.length === 0) {
      getEvents();
    }
  }, [initialEvents]);

  return { events, error, loading };
};
