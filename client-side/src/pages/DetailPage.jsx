import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getItem } from '../../actions/actionCreator';
import CardDetailProtergo from '../components/CardDetailProtergo';

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
      <div className="p-[30px]">
        <CardDetailProtergo />
      </div>
    </>
  );
}
