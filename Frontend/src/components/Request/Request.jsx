import React from 'react';
import "./style.css";

const Request = () => {
  return (
    <div className='flex justify-center h-full bg-black bg-opacity-75 fixed w-full z-40 absolute modal'>
    <div className="hidden sm:block" aria-hidden="true">
      <div>
        <div className="border-t border-gray-200" />
      </div>
    </div>

    <div className="mt-10 sm:mt-0">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1 ">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-white">Juiste gegevens invoeren. </h3>
            <p className="mt-1 text-sm text-white">Gebruik het adres van het object <br /> waar het werk moet worden gedaan. <br /> Onze medewerker neemt contact met u  op <br /> op het opgegeven telefoonnummer</p>
          </div>
        </div>
        <div className="mt-5 md:col-span-2 md:mt-0">
          <form action="#" method="POST">
            <div className="overflow-hidden shadow sm:rounded-md">
              <div className="bg-white px-4 py-5 sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                      First name
                    </label>
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                      Last name
                    </label>
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-4">
                    <label htmlFor="phone_number" className="block text-sm font-medium text-gray-700">
                      Uw Telefoonnummer
                    </label>
                    <input
                      type="text"
                      name="phone_number"
                      id="phone_number"
                      autoComplete="text"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div className="col-span-6">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                      Stad, Straat en Huisnummer
                    </label>
                    <input
                      type="text"
                      name="address"
                      id="address"
                      autoComplete="address"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-between bg-gray-50 px-4 py-3 text-right sm:px-6">
                <button
                  type="button"
                  className="inline-flex justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white shadow-sm">
                  Sluiten
                </button>
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div className="hidden sm:block" aria-hidden="true">
      <div className="py-5">
        <div className="border-t border-gray-200" />
      </div>
    </div>
</div>
  )
}

export default Request
