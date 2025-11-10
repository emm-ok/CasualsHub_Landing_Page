import { NavLink } from "react-router-dom"

const ErrorPage = () => {
    const goBackBtn = () => {

    }
  return (
    <div className='flex flex-col justify-center items-center max-w-screen'>
        <div className='font-medium text-4xl'>Sorry, This Page does not Exist</div>
        <NavLink to='/'>
            <button className='border rounded text-xl font-medium bg-amber-900 mt-10 p-4 text-white' onClick={goBackBtn}>Go Back</button>
        </NavLink>
    </div>
  )
}

export default ErrorPage