import { TrashIcon } from '@heroicons/react/24/solid';
import { Button, Modal } from 'flowbite-react';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteItem, fetchItem } from '../../actions/actionCreator';

export default function ModalDeleteProtergo({ id, name }) {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-right',
    iconColor: 'white',
    customClass: {
      popup: 'colored-toast',
    },
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
  });

  const handleDelete = async () => {
    await dispatch(deleteItem(id));
    await dispatch(fetchItem());
    await Toast.fire({
      icon: 'success',
      iconColor: '#4ade80',
      width: 'auto',
      title: `Success Delete item with name ${name}`,
    });
    navigate('/inventories');
  };

  return (
    <>
      <React.Fragment>
        <TrashIcon
          onClick={() => setVisible(true)}
          className="h-4 text-gray-400 hover:text-sky-400"
        />
        <Modal
          className="h-screen"
          show={visible}
          onClose={() => setVisible(false)}
        >
          <div className="mt-[80%] md:mt-0">
            <Modal.Header>Delete Item</Modal.Header>
            <Modal.Body>
              <div className="space-y-2">
                <p className="text-center leading-relaxed text-gray-900 dark:text-gray-400">
                  Are you sure want to delete item with name{' '}
                  <span className="font-extrabold">{name}</span>?
                </p>
                <div className="flex gap-[20px] px-[25%]">
                  <Button
                    onClick={() => setVisible(false)}
                    className="my-[10px] w-full bg-gray-300 hover:bg-gray-200"
                  >
                    <span className="text-gray-700">Cancel</span>
                  </Button>
                  <Button
                    onClick={handleDelete}
                    className="my-[10px] w-full bg-sky-400"
                    type="submit"
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </Modal.Body>
          </div>
        </Modal>
      </React.Fragment>
    </>
  );
}
