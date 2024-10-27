// app/events/page.tsx
import { fetchEvents } from '../../services/event';
import EventCard from '../../components/EventCard';
import Button from '../../components/Button';
import { Event } from '../../utils/types';

const EventsPage = async () => {
  const events: Event[] = await fetchEvents();
  const popularEvents = events.slice(0, 3); // Slice for the most popular events

  return (
    <div className="flex flex-col min-h-screen">

      <main className="flex-grow container mx-10 py-10">
        <section className="text-center mb-10">
          <h2 className="text-large">Popular Events</h2>
          <p className="text-small">Check out our most popular events below!</p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {popularEvents.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Button label="More Events" />
        </div>
      </main>
    </div>
  );
};

export default EventsPage;
