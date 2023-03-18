import { Navbar } from 'flowbite-react';
import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import NavbarProtergo from './NavbarProtergo';
import SidebarProtergo from './SidebarProtergo';
import React from 'react';

export default function BaseLayout() {
  const navigate = useNavigate();
  const role = localStorage.getItem('role');
  const [visible, setVisible] = useState(true);

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-right',
    iconColor: 'white',
    customClass: {
      popup: 'colored-toast',
    },
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
  });

  return (
    <>
      <div
        className={
          role === 'user'
            ? 'h-screen justify-between lg:mx-[20%]'
            : 'grid grid-cols-12'
        }
      >
        {role === 'user' ? (
          <NavbarProtergo />
        ) : (
          <div className="hidden lg:col-span-2 lg:block lg:border-r-2 lg:p-[20px]">
            <SidebarProtergo />
          </div>
        )}

        <div
          className={
            role === 'user'
              ? ''
              : 'col-span-12 px-[20px] md:px-[30px] md:py-[10px] lg:col-span-10 lg:py-[30px] lg:px-[60px]'
          }
        >
          {role !== 'user' ? (
            <Navbar className="my-[10px] flex items-center justify-between lg:hidden">
              <Navbar.Brand
                onClick={() => navigate('/')}
                className="cursor-pointer"
              >
                <img
                  src="https://protergo.id/wp-content/uploads/2020/10/protergo-logo-avtar.png"
                  className="h-8"
                  alt="Protergo Logo"
                />
              </Navbar.Brand>
              <div
                className="flex md:hidden"
                onClick={() => {
                  setVisible(true);
                }}
              >
                <Navbar.Toggle />
              </div>
              <Navbar.Collapse className={visible === true ? '' : 'hidden'}>
                <Navbar.Link
                  className="cursor-pointer border-gray-200 py-[15px] pl-[0px] text-start md:text-gray-600"
                  onClick={() => {
                    navigate('/');
                    setVisible(false);
                  }}
                >
                  Dashboard
                </Navbar.Link>
                <Navbar.Link
                  className="cursor-pointer border-gray-200 py-[15px] pl-[0px] text-start md:text-gray-600"
                  onClick={() => {
                    navigate('/inventories');
                    setVisible(false);
                  }}
                >
                  Inventory
                </Navbar.Link>
                <Navbar.Link
                  className="cursor-pointer border-gray-200 py-[15px] pl-[0px] text-start md:text-gray-600"
                  onClick={() => {
                    navigate('/registration');
                    setVisible(false);
                  }}
                >
                  Registration
                </Navbar.Link>
                <Navbar.Link
                  className="cursor-pointer border-gray-200 py-[15px] pl-[0px] text-start md:text-gray-600"
                  onClick={async () => {
                    localStorage.removeItem('access_token');
                    navigate('/login');
                    setVisible(false);
                    await Toast.fire({
                      icon: 'success',
                      iconColor: '#4ade80',
                      width: 'auto',
                      title: `Success Logout`,
                    });
                  }}
                >
                  Logout
                </Navbar.Link>
              </Navbar.Collapse>
            </Navbar>
          ) : (
            ''
          )}
          <Outlet />
        </div>
      </div>
    </>
  );
}
