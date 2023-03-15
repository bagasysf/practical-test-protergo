import { Navbar, Button } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';

export default function NavbarProtergo() {
  const navigate = useNavigate();
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
      <div className="p-[20px] md:p-[10px]">
        <Navbar className="" fluid={true}>
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
          <div className="flex md:hidden">
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
            <Navbar.Link
              className="cursor-pointer rounded-lg bg-sky-400 text-white md:bg-white md:text-gray-600"
              onClick={() => navigate('/')}
            >
              Home
            </Navbar.Link>
            <Navbar.Link
              className="cursor-pointer md:text-gray-600"
              onClick={async () => {
                localStorage.removeItem('access_token');
                navigate('/login');
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
