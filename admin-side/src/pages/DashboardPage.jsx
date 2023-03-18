import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser, fetchItem } from '../../actions/actionCreator';
import CardProtergo from '../components/CardProtergo';

export default function DashboardPage() {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.item);
  const { users } = useSelector((state) => state.user);

  useEffect(() => {
    (async () => {
      await dispatch(fetchItem());
      await dispatch(fetchUser());
    })();
  }, []);

  return (
    <>
      <p className="px-[10px] pb-[30px] text-xl font-extrabold md:pt-[10px] lg:p-0 lg:text-2xl">
        Dashboard
      </p>
      <div className="flex flex-col gap-[40px] px-[10px]  md:flex-row lg:grid lg:grid-cols-4 lg:gap-[30px] lg:px-[0px] lg:py-[30px]">
        <CardProtergo
          type="cardDashboard"
          quantity={items.length}
          description="Total Item"
        />
        <CardProtergo
          type="cardDashboard"
          quantity={users.length}
          description="Total User"
        />
      </div>
    </>
  );
}
