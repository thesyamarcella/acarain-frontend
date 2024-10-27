'use client';
import useSWR from 'swr';
import { fetcher } from '@/lib/fetcher';

export default function EventDetailPage({ params }: { params: { id: string } }) {
  const { data, error } = useSWR(`/events/${params.id}`, fetcher);

  if (error) return <div>Failed to load event details</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold">{data.name}</h1>
      <p className="text-sm text-gray-600">{data.dateTime}</p>
      <p className="mt-4">{data.description}</p>
      <h2 className="text-2xl mt-8">Tickets</h2>
      <ul>
        {data.tickets.map((ticket: any) => (
          <li key={ticket.id}>
            {ticket.ticketType}: ${ticket.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
