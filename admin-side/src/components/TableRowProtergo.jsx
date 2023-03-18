import { Table } from 'flowbite-react';
import { PencilIcon, EyeIcon, TrashIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';
import ModalProtergo from './ModalProtergo';
import ModalDeleteProtergo from './ModalDeleteProtergo';

export default function TableRowProtergo({ item, index }) {
  const navigate = useNavigate();

  function spliceWord(word = '', len) {
    return word?.length > len ? word.slice(0, len).concat(' ...') : word;
  }

  return (
    <>
      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
        <Table.Cell className="whitespace-nowrap font-medium  dark:text-white">
          {item.name}
        </Table.Cell>
        <Table.Cell>{item.quantity}</Table.Cell>
        <Table.Cell>{spliceWord(item.description, 30)}</Table.Cell>
        <Table.Cell>
          <div className="flex gap-[20px] ">
            <ModalProtergo
              name={item.name}
              quantity={item.quantity}
              description={item.description}
            />
            <PencilIcon
              onClick={() => navigate(`update/${item.id}`)}
              className="h-4 text-gray-400 hover:text-sky-400"
            />
            <ModalDeleteProtergo name={item.name} id={item.id} />
          </div>
        </Table.Cell>
      </Table.Row>
    </>
  );
}
