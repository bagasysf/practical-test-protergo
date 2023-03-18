import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItem } from '../../actions/actionCreator';
import CardItemProtergo from '../components/CardItemProtergo';

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
      <div className="flex flex-col justify-between gap-[30px] px-[30px] pt-[15px] pb-[60px] md:grid md:grid-cols-2 md:flex-row md:gap-[40px] md:p-[40px]">
        {!isLoading ? (
          items.map((item, index) => (
            <CardItemProtergo key={item.id} item={item} index={index} />
          ))
        ) : (
          <p>Loading ..</p>
        )}
      </div>
    </>
  );
}
