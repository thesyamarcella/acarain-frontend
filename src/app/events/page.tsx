import { fetchEvents } from '../../services/event';
import { Event } from '../../types';

const EventsPage = async () => {
    const events: Event[] = await fetchEvents();

    return (
        <div className="container">
            <h1 className="title is-2 has-text-centered">Events</h1>
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
                                    <strong>Location:</strong> {event.location}<br />
                                    <strong>Description:</strong> {event.description}<br />
                                    <strong>Tickets Available:</strong> {event.ticketQuantity}<br />
                                    <strong>Price:</strong> ${event.ticketPrice.toFixed(2)}
                                </div>
                            </div>
                            <footer className="card-footer">
                                <a href="#" className="card-footer-item button">Buy Tickets</a>
                            </footer>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EventsPage;
