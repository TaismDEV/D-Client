import React from 'react';
import { useSelector } from 'react-redux';

const OurServices = () => {

  const products = useSelector(state => state.content.products);
  
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4  sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Services</h2>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((service) => (
            <div key={service.id} className="group">
              <div className="aspect-w-9 aspect-h-7 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-9 xl:aspect-h-7">
                <img
                  src={service.imageSrc}
                  alt={service.imageAlt}
                  className="h-full w-full object-cover object-center "
                />
              </div>
              <p className="mt-1 text-center text-2xl font-medium text-blue-800">{service.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
