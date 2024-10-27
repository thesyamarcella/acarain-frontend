// components/Services.tsx
const Services: React.FC = () => {
    return (
      <section className="py-20 text-center">
        <h2 className="text-3xl font-semibold mb-5">Why Acarain?</h2>
        <div className="grid grid-cols-3 gap-10">
          <div className="flex flex-col items-center">
            <img src="/icons/events.svg" alt="Variety of Events" className="w-16 h-16 mb-2" />
            <h3>Variety of Events</h3>
          </div>
          <div className="flex flex-col items-center">
            <img src="/icons/organizers.svg" alt="Top Organizers" className="w-16 h-16 mb-2" />
            <h3>Top Organizers</h3>
          </div>
          <div className="flex flex-col items-center">
            <img src="/icons/booking.svg" alt="Easy Booking" className="w-16 h-16 mb-2" />
            <h3>Easy Booking</h3>
          </div>
        </div>
      </section>
    );
  };
  
  export default Services;
  