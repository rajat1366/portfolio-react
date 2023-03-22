import React from 'react'

export default function InfoTile(props) {
  return (
    <div className='inline-flex items-center space-x-2 '>
                             <div>
                                <div className='p-6 rounded-full bg-white shadow-2xl'>
                                    <props.icon className='w-8 h-8 fill-blue-500 '/>
                                </div>
                                
                                </div>
                             <div className='space-y-2 p-2'>
                                <div className='font-bold text-lg'>{props.name}</div>
                                <div className='text-slate-500'>{props.info}</div>
                             </div>
    </div>
  )
}
