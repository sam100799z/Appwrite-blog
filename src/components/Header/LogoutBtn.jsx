import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'

function LogoutBtn() {
  const dispatch = useDispatch()
  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout())
    })
  }
  return (
    <button
      className="inline-block px-5 py-2 text-black text-sm font-medium hover:bg-gray-500 transition duration-200"
      onClick={logoutHandler}
    >
      Logout
    </button>
  );

}

export default LogoutBtn