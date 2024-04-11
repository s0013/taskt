import React from 'react';

const Awards = () => {
    const awards = [
        {
          year: 2001,
          name: 'Honorary Doctor of Business Administration',
          organisation: 'Ohio State University',
          ref: '[66]'
        },
        {
          year: 2004,
          name: 'Medal of the Oriental Republic of Uruguay',
          organisation: 'Government of Uruguay',
          ref: '[67]'
        },
        {
          year: 2004,
          name: 'Honorary Doctor of Technology',
          organisation: 'Asian Institute of Technology',
          ref: '[68]'
        },
        {
          year: 2005,
          name: 'International Distinguished Achievement Award',
          organisation: 'B\'nai B\'rith International',
          ref: '[69]'
        },
        {
          year: 2005,
          name: 'Honorary Doctor of Science',
          organisation: 'University of Warwick',
          ref: '[70]'
        },
        {
          year: 2006,
          name: 'Honorary Doctor of Science',
          organisation: 'Indian Institute of Technology Madras',
          ref: '[71]'
        },
        {
          year: 2006,
          name: 'Responsible Capitalism Award',
          organisation: 'For Inspiration and Recognition of Science and Technology (FIRST)',
          ref: '[72]'
        },
        // Add more awards here
      ];
      return (
        <div>
          <div className="text-center font-bold text-4xl my-4 mx-auto" id='awards'>Awards</div>
          <div className="flex flex-wrap justify-center">
            {awards.map((award, index) => (
              <div key={index}className="max-w-xs mx-2 my-4 bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{award.name}</div>
                  <p className="text-gray-700 text-base">{award.organisation}</p>
                  <p className="text-gray-600 text-sm">{award.year}</p>
                </div>
                <div className="px-6 py-4">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    {award.ref}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
      
};

export default Awards;
