import React from 'react'

const products = [
  {
    id: 1,
    name: 'Elektrisch installatiewerk',
    info: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageSrc: './elektro.jpg',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'Ontmanteling',
    info: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageSrc: './Ontmanteling.jpeg',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'Loodgieterswerk',
    info: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageSrc: './Loodgieterswerk.jpeg',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'Metselwerk',
    info: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageSrc: './Metselwerk.jpeg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 1,
    name: 'Tegels leggen',
    info: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageSrc: './Tegelsleggen.jpeg',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'Schilderwerken',
    info: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageSrc: './Schilderwerken.jpeg',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'Parket leggen',
    info: ' lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageSrc: './Parketleggen.jpeg',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'Installatie van de deur',
    info: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageSrc: './InstallatieVanDeDeur.jpeg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  }
]

const OurServices = () => {
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
              <p className="mt-1 text-lg font-medium text-teal-600">{service.name}</p>
              <h3 className="text-sm text-gray-500">{service.info}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
