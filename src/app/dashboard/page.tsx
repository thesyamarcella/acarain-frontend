import { fetchEvents } from '../../services/event';
import { Event } from '../../types';

const DashboardPage = async () => {
    const events: Event[] = await fetchEvents();

    return (
        <div className="container">
            <h1 className="title is-2 has-text-centered">Dashboard</h1>
            <div className="columns is-multiline">
                {events.map(event => (
                    <div className="column is-one-third" key={event.id}>
                        <div className="card">
                            <header className="card-header">
                                <p className="card-header-title">{event.name}</p>
                            </header>
                            <div className="card-content">
                                <div className="content">
                                    <strong>Date:</strong> {new Date(event.dateTime).toLocaleString()}<br />
                                    <strong>Tickets Sold:</strong> {event.ticketQuantity}<br />
                                    <strong>Status:</strong> {event.ticketQuantity > 0 ? 'Active' : 'Sold Out'}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DashboardPage;
