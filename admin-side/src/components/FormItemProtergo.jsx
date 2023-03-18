import { Label, TextInput, Button } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {
  addItem,
  fetchItem,
  getItem,
  updateItem,
} from '../../actions/actionCreator';

export default function FormItemProtergo({ headerForm, type, item }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let initialValue = {};
  if (type === 'put') {
    initialValue = {
      name: item.name,
      quantity: item.quantity,
      description: item.description,
    };
  } else {
    initialValue = {
      name: '',
      quantity: '',
      description: '',
    };
  }
  const [inputValues, setInputValues] = useState(initialValue);

  const handleInputValues = async (e) => {
    e.preventDefault();
    try {
      const name = e.target.name;
      const value = e.target.value;
      setInputValues({
        ...inputValues,
        [name]: value,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (type === 'put') {
      await dispatch(updateItem(item.id, inputValues));
      await dispatch(fetchItem());
      setInputValues({
        name: '',
        quantity: '',
        description: '',
      });
      navigate('/inventories');
      await Toast.fire({
        icon: 'success',
        iconColor: '#4ade80',
        width: 'auto',
        title: `Success update item with id ${item.id}`,
      });
    } else {
      await dispatch(addItem(inputValues));
      await dispatch(fetchItem());
      setInputValues({
        name: '',
        quantity: '',
        description: '',
      });
      navigate('/inventories');
      await Toast.fire({
        icon: 'success',
        iconColor: '#4ade80',
        width: 'auto',
        title: `Success add new item`,
      });
    }
  };

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

  return (
    <>
      <p className="px-[10px] text-2xl font-extrabold lg:px-0">{headerForm}</p>
      <form
        onSubmit={handleSubmit}
        className="lg-px-0 flex max-w-md flex-col gap-4 px-[10px] py-[30px]"
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="text" value="Name" />
          </div>
          <TextInput
            onClick={focus}
            id="name"
            type="text"
            name="name"
            autoFocus
            placeholder="Input item name"
            value={inputValues.name}
            onChange={handleInputValues}
            required={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="text" value="Quantity" />
          </div>
          <TextInput
            id="quantity"
            type="text"
            name="quantity"
            placeholder="Input item quantity"
            value={inputValues.quantity}
            onChange={handleInputValues}
            required={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="text" value="Description" />
          </div>
          <TextInput
            id="description"
            type="text"
            name="description"
            placeholder="Input item description"
            value={inputValues.description}
            onChange={handleInputValues}
            required={true}
          />
        </div>

        <div className="flex  justify-between gap-[20px]">
          <Button
            onClick={() => {
              setInputValues({
                name: '',
                quantity: '',
                description: '',
              });
              navigate('/inventories');
            }}
            className="my-[10px] w-full bg-gray-300 hover:bg-gray-200"
          >
            <span className="text-gray-700">Cancel</span>
          </Button>
          <Button className="my-[10px] w-full bg-sky-400" type="submit">
            {type === 'put' ? 'Update' : 'Submit'}
          </Button>
        </div>
      </form>
    </>
  );
}
