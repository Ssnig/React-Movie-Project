import React from 'react'
import benImage from './Img/ben.png'
import { Card } from 'flowbite-react'
import { Navigate } from 'react-router'

const Detail = () => {
  return (
    <div className='container mx-auto'>
      <div>
        <div>
          <span  style={{'fontSize' : '20px'}} onClick={()=>Navigate('/')} >Back</span>
        </div>
        <Card
          className="max-w-sm"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc={benImage}
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
          </p>
        </Card>
      </div>
    </div>
  )
}

export default Detail