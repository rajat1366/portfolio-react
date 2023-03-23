import React from 'react'
import { FaMapMarkedAlt,FaEnvelopeOpenText} from 'react-icons/fa';
import InfoTile from './InfoTile';
export default function Contact() {
  return (
    <div className='p-10 font-sans bg-white py-24' id='contact'>
        <div className='flex justify-center items-center  w-full'>
                <div className='md:w-full lg:w-2/3'>
                    <div className='font-bold text-lg text-blue-500'>CONTACT</div>
                    <div className='font-bold text-2xl'>
                            Don't be shy! Hit me up! 👇
                    </div>
                    <div className='md:block lg:inline-flex  py-10 lg:space-x-16 '>
                        <InfoTile name="Location" info="Chandigarh,India" icon={FaMapMarkedAlt}></InfoTile>
                        <InfoTile name="Mail" info="rajat1366@gmail.com" icon={FaEnvelopeOpenText}></InfoTile>
                    </div>
                </div>

        </div>
    </div>
  )
}
