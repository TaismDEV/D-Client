import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { Modal, Feedback } from '../../store/actions'

const About = () => {

  const dispatch = useDispatch();
  const handModal = () => {
    dispatch(Modal());
  };

  const handFeedback = () => {
    dispatch(Feedback());
  };

  return (
    <div className="relative overflow-hidden bg-white">
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Wij zijn <span className='text-indigo-900'>DAHKO</span>
            </h1>
            <p className="mt-4 text-xl text-gray-500">
            Al 10 jaar lang zijn wij een competitieve en kwaliteitsvolle speler in de bouw- en renovatiemarkt. <br /><Link to="" onClick={() => handFeedback()} className='text-blue-600 '>  Contacteer ons </Link> of doe een aanvraag en wij nemen zelf zo snel mogelijk contact met u op.
            </p>
          </div>
          <div>
            <div className="mt-10">
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <img
                          src="./beforeAfter/after1.jpeg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="./beforeAfter/after4.jpeg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src='./6.jpg'
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="./beforeAfter/after3.jpeg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="./about/about1.jpeg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src='./7.jpg'
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="./beforeAfter/after2.jpeg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Link onClick={() => handModal()} to="/" className="inline-block rounded-md border border-transparent bg-indigo-800 py-3 px-8 text-center font-medium text-white hover:bg-indigo-700">
              Aanvraag indienen
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
