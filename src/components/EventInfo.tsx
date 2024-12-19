import React from "react";

const EventInfo: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Event Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">The Venue</h3>
            <p className="text-gray-600">
              [Venue Name]
              <br />
              [Street Address]
              <br />
              [City, State ZIP]
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Date & Time</h3>
            <p className="text-gray-600">
              [Event Date]
              <br />
              [Start Time] - [End Time]
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Theme</h3>
            <p className="text-gray-600">
              [Event Theme]
              <br />
              <span className="text-sm italic">
                Join us for a day of inspiring talks and meaningful connections
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventInfo;
