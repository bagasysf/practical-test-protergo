import { Outlet } from 'react-router-dom';
import NavbarProtergo from './NavbarProtergo';

export default function BaseLayout() {
  return (
    <>
      <div className="h-screen justify-between lg:mx-[25%]">
        <NavbarProtergo />
        <Outlet />
      </div>
    </>
  );
}
