import React from 'react';

const Quotes = () => {
  const title = "Inspiring Quotes";
  const quotes = [
    { text: "None can destroy iron, but its own rust can! Likewise, none can destroy a person, but their own mindset can.", author: 'Ratan Tata' },
    { text: "Take the stones people throw at you and use them to build a monument.", author: 'Ratan Tata' },
    { text: "I don't believe in taking right decisions. I take decisions and then make them right.", author: 'Ratan Tata' },
    { text: "The day I am not able to fly will be a sad day for me.", author: 'Ratan Tata' },
    { text: "The strongest thing I ever did was to show my emotions to the world.", author: 'Ratan Tata' },
    { text: "In the end, we only regret the chances we didn't take.", author: 'Ratan Tata'},
    

  ];
  return (
    <div className="container mx-auto bg-white" id="quotes">
      <p className="text-2xl font-bold mt-8 text-center">{title}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
        {quotes.map((quote, index) => (
          <div key={index} className="p-4 relative">
            <div className="glow-border absolute inset-0 border-4 rounded-lg animate-glowing"></div>
            <div className="bg-gray-100 shadow-md rounded-lg p-4 transform transition-transform hover:scale-105">
              <p className="text-lg font-medium">{quote.text}</p>
              <p className="text-sm text-gray-600 mt-2">- {quote.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  
};

export default Quotes;
