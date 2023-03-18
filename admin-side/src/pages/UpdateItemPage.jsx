import { Spinner } from 'flowbite-react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getItem } from '../../actions/actionCreator';
import FormItemProtergo from '../components/FormItemProtergo';

export default function UpdateItemPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { isLoading, item, error } = useSelector((state) => state.item);

  useEffect(() => {
    (async () => {
      await dispatch(getItem(id));
    })();
  }, []);

  return (
    <>
      {!isLoading ? (
        <FormItemProtergo item={item} headerForm="Update Item" type="put" />
      ) : (
        <Spinner />
      )}
    </>
  );
}
