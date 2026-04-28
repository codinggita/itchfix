import React from 'react';

const PricingCard = ({ title, price, features, isPopular }) => {
  return (
    <div className={`rounded-lg shadow-lg bg-white overflow-hidden ${isPopular ? 'border-2 border-indigo-500' : 'border border-gray-200'}`}>
      <div className="px-6 py-8 sm:p-10 sm:pb-6">
        <div>
          <h3 className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-indigo-100 text-indigo-600" id="tier-standard">
            {title}
          </h3>
        </div>
        <div className="mt-4 flex items-baseline text-6xl font-extrabold">
          ${price}
          <span className="ml-1 text-2xl font-medium text-gray-500">/mo</span>
        </div>
        <p className="mt-5 text-lg text-gray-500">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>
      </div>
      <div className="px-6 pt-6 pb-8 bg-gray-50 sm:p-10 sm:pt-6">
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="ml-3 text-base text-gray-700">{feature}</p>
            </li>
          ))}
        </ul>
        <div className="mt-6 rounded-md shadow">
          <a href="#" className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900">
            Get started
          </a>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
