import { Sidebar } from 'flowbite-react';
import {
  PresentationChartBarIcon,
  Square3Stack3DIcon,
  UserPlusIcon,
  XCircleIcon,
} from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';

export default function SidebarProtergo() {
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
      <div className={'h-screen'}>
        <div className="flex justify-center py-[20px]">
          <img
            src="https://protergo.id/wp-content/uploads/2020/10/protergo-logo-avtar.png"
            className="mr-3 h-14"
            alt="Protergo Logo"
          />
        </div>
        <Sidebar aria-label="Default sidebar example" className="w-full">
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item onClick={() => navigate('/')}>
                <div className="flex justify-start gap-[10px] items-center cursor-pointer">
                  <PresentationChartBarIcon className="h-6 w-6 text-sky-400" />
                  <span>Dashboard</span>
                </div>
              </Sidebar.Item>
              <Sidebar.Item onClick={() => navigate('/inventories')}>
                <div className="flex justify-start gap-[10px] items-center cursor-pointer">
                  <Square3Stack3DIcon className="h-6 w-6 text-sky-400" />
                  <span>Inventory</span>
                </div>
              </Sidebar.Item>
              <Sidebar.Item onClick={() => navigate('/registration')}>
                <div className="flex justify-start gap-[10px] items-center cursor-pointer">
                  <UserPlusIcon className="h-6 w-6 text-sky-400" />
                  <span>Registration</span>
                </div>
              </Sidebar.Item>
              <Sidebar.Item
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
                <div className="flex justify-start gap-[10px] items-center cursor-pointer">
                  <XCircleIcon className="h-6 w-6 text-sky-400" />
                  <span>Logout</span>
                </div>
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
    </>
  );
}
