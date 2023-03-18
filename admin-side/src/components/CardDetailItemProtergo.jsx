import { Card } from 'flowbite-react';
import { useSelector } from 'react-redux';

export default function CardDetailItemProtergo() {
  const { isLoading, item } = useSelector((state) => state.item);

  return (
    <>
      <div className="max-w-sm cursor-default md:col-span-1 md:max-w-full">
        {!isLoading ? (
          <Card>
            <div className="flex flex-col items-center justify-center gap-[20px]">
              <div className="text-9xl font-extrabold text-sky-400">
                {item.quantity}
              </div>
              <div className="flex flex-col gap-[20px]">
                <h5 className="text-center text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.name}
                </h5>
                <p className="text-center text-lg font-normal text-gray-700 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            </div>
          </Card>
        ) : (
          <p>Loading</p>
        )}
      </div>
    </>
  );
}
