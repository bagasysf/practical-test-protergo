import { Button } from 'flowbite-react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchItem } from '../../actions/actionCreator';
import TableProtergo from '../components/TableProtergo';

export default function InventoryPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      await dispatch(fetchItem());
    })();
  }, []);

  return (
    <>
      <div className="flex max-w-4xl flex-col justify-between px-[10px] lg:flex-row lg:items-center lg:px-0">
        <p className="text-2xl font-extrabold">List Inventories</p>
        <Button
          onClick={() => {
            navigate('add');
          }}
          className="mt-[20px] w-28 bg-sky-400 lg:my-0"
        >
          Add Item
        </Button>
      </div>
      <div className="py-[30px] px-[10px] lg:px-0">
        <TableProtergo />
      </div>
    </>
  );
}
