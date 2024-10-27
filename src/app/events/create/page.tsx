'use client';
import { useState } from 'react';
import api from '@/lib/api';
import { useRouter } from 'next/router';

export default function CreateEventPage() {
  const [name, setName] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [ticketPrice, setTicketPrice] = useState(0);
  const [ticketQuantity, setTicketQuantity] = useState(0);
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await api.post('/events', {
        name,
        dateTime,
        location,
        description,
        ticketPrice,
        ticketQuantity,
        organizerId: 1, 
      });
      router.push('/events');
    } catch (error) {
      console.error('Failed to create event', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Create Event</h1>
      <div className="mb-4">
        <label className="block text-sm">Event Name</label>
        <input type="text" value={name} onChange={e => setName(e.target.value)} className="w-full p-2 border rounded" />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Create Event</button>
    </form>
  );
}
