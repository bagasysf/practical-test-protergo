import { Spinner, Table } from 'flowbite-react';
import { useSelector } from 'react-redux';
import TableRowProtergo from './TableRowProtergo';

export default function TableProtergo() {
  const { isLoading, items, error } = useSelector((state) => state.item);
  return (
    <>
      <div className="border rounded-lg border-gray-200 max-w-4xl">
        <Table>
          <thead className="border-b">
            <tr>
              <th className="px-[22px] py-[16px] text-gray-900">Name</th>
              <th className="px-[22px] py-[16px] text-gray-900">Quantity</th>
              <th className="px-[22px] py-[16px] text-gray-900">Description</th>
              <th className="px-[22px] py-[16px] text-gray-900">Action</th>
            </tr>
          </thead>
          <Table.Body className="divide-y">
            {!isLoading ? (
              items.map((item, index) => (
                <TableRowProtergo key={item.id} item={item} index={index} />
              ))
            ) : (
              <tr>
                <td className="p-[30px] flex gap-[30px]">
                  <Spinner />
                </td>
              </tr>
            )}
          </Table.Body>
        </Table>
      </div>
    </>
  );
}
