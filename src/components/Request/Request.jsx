import React from 'react';
import { useDispatch } from "react-redux";
import { Modal } from '../../store/actions'
import { request } from '../../store/actions';
import "./style.css";

const Request = () => {

  const [Naam, setNaam] = React.useState("");
  const [phoneNummer, setPhoneNummer] = React.useState("");
  const [adress, setAdress] = React.useState("");
  const [info, setInfo] = React.useState("");

  const dispatch = useDispatch();

  const handModal = () => {
    dispatch(Modal());
  }

  const handRequest = (e) => {
    e.preventDefault();
    dispatch(request( { Naam, phoneNummer, adress, info } ));
  }

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
            <h3 className="text-lg font-medium leading-6 text-white"> Laat uw contactgegevens achter. </h3>
            <p className="mt-1 text-sm text-white">  Onze medewerker neemt contact met u  op.</p>
          </div>
        </div>
        <div className="mt-5 md:col-span-2 md:mt-0">
          <form onSubmit={handRequest}>
            <div className="overflow-hidden shadow sm:rounded-md">
              <div className="bg-white px-4 py-5 sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 ">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Naam <span className='text-red-600 text-xl'>*</span>
                    </label>
                    <input
                      onChange={(e) => setNaam(e.target.value)}
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div className="col-span-6 ">
                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                      GSM-nummer of telefoonnummer <span className='text-red-600 text-xl'>*</span>
                    </label>
                    <input
                      onChange={(e) => setPhoneNummer(e.target.value)}
                      type="text"
                      name="phoneNumber"
                      id="phoneNumber"
                      autoComplete="phoneNumber"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div className="col-span-6">
                    <label htmlFor="adress" className="block text-sm font-medium text-gray-700">
                      Adres van de werkplaats (stad, straat en huisnummer)<span className='text-red-600 text-xl'>*</span>
                    </label>
                    <input
                      onChange={(e) => setAdress(e.target.value)}
                      type="text"
                      name="adress"
                      id="adress"
                      autoComplete="adress"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div className="col-span-6">
                    <label htmlFor="info" className="block text-sm font-medium text-gray-700">
                      Korte beschrijving: (niet relevant)
                    </label>
                    <input
                      onChange={(e) => setInfo(e.target.value)}
                      type="text"
                      name="info"
                      id="info"
                      autoComplete="info"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-between bg-gray-50 px-4 py-3 text-right sm:px-6">
                <button
                  onClick={() => handModal()}
                  className="inline-flex justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white shadow-sm">
                  Sluiten
                </button>
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  Versturen
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
