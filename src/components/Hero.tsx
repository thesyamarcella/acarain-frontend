// components/Hero.tsx
const Hero: React.FC = () => {
    return (
      <section className="flex flex-col items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/images/hero.jpg)' }}>
        <h1 className="text-5xl font-bold text-black mb-4">Experience the Best Events Near You</h1>
        <div className="flex space-x-4">
          <input type="text" placeholder="Location" className="rounded-full border-2 border-gray-300 p-2" />
          <input type="date" className="rounded-full border-2 border-gray-300 p-2" />
          <button className="bg-purple-600 text-white rounded-full px-4 py-2">Search</button>
        </div>
      </section>
    );
  };
  
  export default Hero;
  