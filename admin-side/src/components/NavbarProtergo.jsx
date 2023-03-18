import { Bars3Icon } from '@heroicons/react/24/solid';
import { Navbar, Button } from 'flowbite-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NavbarProtergo() {
  const navigate = useNavigate();
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
      <div className="p-[20px] md:px-[20px] md:pb-[0px] md:pt-[20px]">
        <Navbar fluid={true}>
          <Navbar.Brand
            onClick={() => navigate('/')}
            className="cursor-pointer"
          >
            <img
              src="https://protergo.id/wp-content/uploads/2020/10/protergo-logo-avtar.png"
              className="mr-3 h-6 sm:h-9"
              alt="Protergo Logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Protergo
            </span>
          </Navbar.Brand>
          <div className="flex md:hidden" onClick={() => setVisible(true)}>
            {/* <div>
              <Bars3Icon className="h-8 w-8" />
            </div> */}
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
              Home
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
      </div>
    </>
  );
}
