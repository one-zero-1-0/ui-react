import React from 'react'
import Navbar from '../../components/Public/Navbar'
import { Link } from 'react-router-dom'
import UserNavbar from '../../components/Public/UserNavbar'

const UserDashboard = () => {
  return (
    <div>
      <UserNavbar/>
      <div className='flex flex-row flex-wrap w-screen justify-center mt-[10px] items-center'>

    <div className='flex flex-row w-[1000px] flex-wrap items-center gap-7 justify-center mt-[10px] '>
    <div>
       <Link to="/viewInstitute" className='bg-gray-400 relative h-[300px] w-[300px] flex justify-center'><div className='text-black flex justify-center items-center'>VIEW INSTITUTE</div></Link>
      </div>

      <div >
      <Link to="/viewCourses" className='bg-gray-400 relative h-[300px] w-[300px] flex justify-center'><div className='text-black flex justify-center items-center '>VIEW COURSE</div></Link>
      </div>

      <div>
      <Link to="/userProfile" className='bg-gray-400 relative h-[300px] w-[300px] flex justify-center'><div className='text-black  flex justify-center items-center'>ADD STUDENT PROFILE</div></Link>
      </div>

      <div>
      <Link to="/viewAdmissionStatus" className='bg-gray-400 relative h-[300px] w-[300px] flex justify-center'><div className='text-black flex justify-center items-center'>CHECK ADMISSION STATUS</div></Link>
      </div>

      <div>
      <Link to="/payment" className='bg-gray-400  h-[300px] w-[300px] flex justify-center'><div className='text-black flex justify-center items-center'>MAKE PAYMENT</div></Link>
      </div>

      <div>
      <Link to="/paymentHistory" className='bg-gray-400  h-[300px] w-[300px] flex justify-center'><div className='text-black flex justify-center items-center'>PAYMENT HISTORY</div></Link>
      </div>
      </div>
      </div>
    </div>
  )
}

export default UserDashboard
