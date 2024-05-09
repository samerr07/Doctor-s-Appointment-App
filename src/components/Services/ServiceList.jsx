import React from 'react'
import {services} from "./../../assets/data/services"
import ServiceCard from './ServiceCard'

const ServiceList = () => {
  return (
    <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
        {
            services.map((item,idx)=>(
                <ServiceCard
                    item={item}
                    index={idx}
                    key={idx}
                />
            ))
        }
    </div>
  )
}

export default ServiceList
