import { fetchEventById } from '../../../services/event'; // Adjust path as needed
import { Event } from '../../../utils/types';

interface EventDetailPageProps {
  params: {
    id: string;
  };
}

const EventDetailPage = async ({ params }: EventDetailPageProps) => {
  const event: Event | null = await fetchEventById(params.id); // Fetch the event by ID

  if (!event) {
    return <div className="container mx-auto mt-20 text-center">Event not found.</div>;
  }

  return (
    <div>
      {/* Hero section */}
      <div className="relative h-96 bg-gradient-to-r from-purple-500 to-blue-500">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">{event.name}</h1>
        </div>
      </div>

      {/* Event details section */}
      <div className="container mx-auto px-6 py-12">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800">{event.name}</h2>
          <p className="mt-4 text-gray-600"><strong>Date:</strong> {new Date(event.dateTime).toLocaleString()}</p>
          <p className="text-gray-600"><strong>Location:</strong> {event.location}</p>
          <p className="mt-4 text-gray-600">{event.description}</p>
          <p className="mt-4 text-gray-600"><strong>Tickets Available:</strong> {event.ticketQuantity}</p>
          <p className="mt-4 text-gray-600"><strong>Price:</strong> ${event.ticketPrice.toFixed(2)}</p>
        </div>

        {/* Call to Action */}
        <div className="mt-8">
          <a href="#" className="bg-yellow-500 text-white rounded-lg py-3 px-6 block text-center">
            Buy Tickets
          </a>
        </div>
      </div>
    </div>
  );
};

export default EventDetailPage;
