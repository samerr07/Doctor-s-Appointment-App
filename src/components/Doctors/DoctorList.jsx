import React from 'react'
import {doctors} from "./../../assets/data/doctors"
import DoctorCard from './DoctorCard'

const DoctorList = () => {


    // useEffect(()=>{
    //     console.log(doctors)
    // })
  return (
    <div className='container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
        {
            doctors.map((e)=><DoctorCard key={e.id} item={e}/>)
        }
    </div>
  )
}

export default DoctorList
