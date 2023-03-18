import { EyeIcon } from '@heroicons/react/24/solid';
import { Modal } from 'flowbite-react';
import React, { useState } from 'react';
import CardDetailProtergo from './CardDetailProtergo';

export default function ModalProtergo({ name, quantity, description }) {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <React.Fragment>
        <EyeIcon
          onClick={() => setVisible(true)}
          className="h-4 text-gray-400 hover:text-sky-400"
        />
        <Modal
          className="mx-autos flex h-screen"
          show={visible}
          onClose={() => setVisible(false)}
        >
          <div className="mt-[80%] md:mt-0">
            <Modal.Header className="px-[30px]">Detail Item</Modal.Header>
            <CardDetailProtergo
              name={name}
              description={description}
              quantity={quantity}
            />
          </div>
        </Modal>
      </React.Fragment>
    </>
  );
}
