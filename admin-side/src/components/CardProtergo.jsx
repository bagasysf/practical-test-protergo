import { Card } from 'flowbite-react';

export default function CardProtergo({ quantity, description }) {
  return (
    <>
      <div className="lg:col-span-1">
        <div className="lg:max-w-sm">
          <Card className="flex items-center justify-center text-center text-sky-400 md:w-[18rem] lg:w-full">
            <p className="text-6xl font-extrabold">{quantity}</p>
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {description}
            </h5>
          </Card>
        </div>
      </div>
    </>
  );
}
