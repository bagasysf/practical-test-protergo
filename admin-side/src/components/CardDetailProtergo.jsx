import { Card } from 'flowbite-react';
import { useSelector } from 'react-redux';

export default function CardDetailProtergo({ name, description, quantity }) {
  return (
    <>
      <div className="max-w-sm cursor-default md:col-span-1 md:max-w-full">
        <Card>
          <div className="flex items-center justify-center gap-[30px]">
            <div className="flex flex-col items-center">
              <span>Quantity</span>
              <div className="text-8xl font-extrabold text-sky-400">
                {quantity}
              </div>
            </div>
            <div className="flex flex-col gap-[10px]">
              <h5 className=" text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                {name}
              </h5>
              <p className=" text-lg font-normal text-gray-700 dark:text-gray-400">
                {description}
              </p>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}
