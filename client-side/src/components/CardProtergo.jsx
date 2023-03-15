import { Card } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';

export default function CardProtergo({ item, index }) {
  const navigate = useNavigate();
  const handleDetailPage = (id) => {
    navigate(`items/${id}`);
  };

  return (
    <>
      <div
        onClick={() => handleDetailPage(item.id)}
        className="max-w-sm cursor-pointer md:col-span-1"
      >
        <Card>
          <div className="flex items-center justify-center gap-[20px]">
            <div className="flex flex-col gap-[10px]">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {item.name}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {item.description}
              </p>
            </div>
            <div className="text-7xl font-extrabold text-sky-400">
              {item.quantity}
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}
