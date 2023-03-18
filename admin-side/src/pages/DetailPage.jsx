import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getItem } from '../../actions/actionCreator';
import CardDetailItemProtergo from '../components/CardDetailItemProtergo';

export default function DetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(getItem(id));
    })();
  }, []);

  return (
    <>
      <div className="py-[15px] px-[30px] md:p-[40px]">
        <CardDetailItemProtergo />
      </div>
    </>
  );
}
