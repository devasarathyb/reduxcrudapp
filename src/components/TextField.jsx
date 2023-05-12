import React from 'react'

export default function TextField({label,inputProps,onChange,value}) {
  return (
    <div className='flex flex-col'>
        <label className='mb-2 text-base text-gray-800'>{label}</label>
        <input {...inputProps} onChange={onChange} value={value} className='bg-gray-200 py-2 px-3 border-2 outline-none'/>
    </div>
  )
}
