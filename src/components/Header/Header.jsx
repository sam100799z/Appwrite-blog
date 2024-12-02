import React, { useState } from 'react'
import { Container, LogoutBtn } from '../index'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import LogoImage from '../../assets/letter-c.png'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const location = useLocation()
  const [active, setActive] = useState(location.pathname === "/all-posts"?"All Posts":location.pathname === "/add-post"?"Add Post":"")

  const navItems = [
    // {
    //   name: "Login",
    //   slug: "/login",
    //   active: !authStatus,
    // },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ]


  return (
    <header className="shadow-lg bg-slate-200 rounded-sm">
      <Container>
        <nav className="flex flex-wrap items-center">
          <div className="mr-4 w-[75px]">
            <Link to="/">
              <img src={LogoImage} alt="" />
            </Link>
          </div>
          <ul className="flex ml-auto gap-2 items-center">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => {
                      navigate(item.slug)
                      setActive(item.name)
                    }}
                    className={`inline-block font-poppins px-4 text-sm py-2 tracking-wider ${active === item.name ? "bg-slate-400" : "text-black"} font-bold rounded-sm  hover:bg-blue-900 hover:text-white transition duration-200`}
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );

}

export default Header