import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItem } from '../../actions/actionCreator';
import CardProtergo from '../components/CardProtergo';

export default function HomePage() {
  const { isLoading, items } = useSelector((state) => state.item);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(fetchItem());
    })();
  }, []);

  return (
    <>
      <div className="flex flex-col gap-[30px] p-[30px] md:grid md:grid-cols-2">
        {!isLoading ? (
          items.map((item, index) => (
            <CardProtergo key={item.id} item={item} index={index} />
          ))
        ) : (
          <p>Loading ..</p>
        )}
      </div>
    </>
  );
}
