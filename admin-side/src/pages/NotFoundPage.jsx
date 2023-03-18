import { Button } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';

export default function NotFoundPage() {
  const role = localStorage.getItem('role');
  const navigate = useNavigate();

  return (
    <>
      <div className="flex h-screen flex-col items-center justify-center gap-[20px]">
        <div className="flex justify-center">
          <img
            src="https://protergo.id/wp-content/uploads/2020/10/protergo-logo-avtar.png"
            className="mr-3 h-14 sm:h-20"
            alt="Protergo Logo"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-[5px] px-10 text-center md:gap-[10px]">
          <p className="text-3xl font-extrabold ">404 Not Found</p>
          <p className="text-gray-500">
            Sorry, we couldn't find what you're looking for
          </p>
        </div>
        <Button
          onClick={() => {
            role === 'user' ? navigate('/home') : navigate('/');
          }}
          className="bg-sky-400"
        >
          {role === 'user' ? 'Back to Home' : 'Back to Dashboard'}
        </Button>
      </div>
    </>
  );
}
