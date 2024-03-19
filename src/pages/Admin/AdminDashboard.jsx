import React from 'react'
import Navbar from '../../components/Public/Navbar'
import { Link } from 'react-router-dom'

const AdminDashboard = () => {
  return (
    <div>
      <Navbar/>
    <div className='flex flex-row flex-wrap w-screen justify-center mt-[10px] items-center'>
      <div className='flex flex-row w-[1000px] flex-wrap justify-center gap-7 justify-center mt-[10px] items-center'>

      <div>
       <Link to="/addInstitute" className='bg-gray-400 relative h-[300px] w-[300px] flex justify-center'><div className='text-black flex justify-center items-center'>ADD INSTITUTE</div></Link>
      </div>

      <div >
      <Link to="/addCourse" className='bg-gray-400 relative h-[300px] w-[300px] flex justify-center'><div className='text-black flex justify-center items-center '>ADD COURSE</div></Link>
      </div>

      <div>
      <Link to="/studentList" className='bg-gray-400 relative h-[300px] w-[300px] flex justify-center'><div className='text-black  flex justify-center items-center'>STUDENT LIST</div></Link>
      </div>

      <div>
      <Link to="/editAdmissionList" className='bg-gray-400 relative h-[300px] w-[300px] flex justify-center'><div className='text-black flex justify-center items-center'>ADMISSION LIST</div></Link>
      </div>

      <div>
      <Link to="/viewPayment" className='bg-gray-400  h-[300px] w-[300px] flex justify-center'><div className='text-black flex justify-center items-center'>PAYMENT LIST</div></Link>
      </div>

      </div>
      </div>
    </div>
  )
}

export default AdminDashboard
