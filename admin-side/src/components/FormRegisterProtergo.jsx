import axios from 'axios';
import { Label, TextInput, Button } from 'flowbite-react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchUser } from '../../actions/actionCreator';
import { BASE_URL } from '../../actions/actionType';

export default function FormRegisterProtergo() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputValues, setInputValues] = useState({
    email: '',
    role: '',
    password: '',
  });

  const handleInputValues = async (e) => {
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
    try {
      const { data } = await axios({
        method: 'POST',
        url: `${BASE_URL}/users/register`,
        data: inputValues,
        headers: {
          access_token: localStorage.getItem('access_token'),
        },
      });
      await dispatch(fetchUser());
      navigate('/');
      await Toast.fire({
        icon: 'success',
        iconColor: '#4ade80',
        width: 'auto',
        title: `${data.message}`,
      });
    } catch (error) {
      console.log(error.message);
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
      <p className="font-extrabold text-2xl">Register User</p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 py-[30px]">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Email" />
          </div>
          <TextInput
            id="email1"
            type="email"
            name="email"
            placeholder="Input email"
            value={inputValues.email}
            onChange={handleInputValues}
            required={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="role" value="Role" />
          </div>
          <select
            name="role"
            value={inputValues.role}
            onChange={handleInputValues}
            className="text-sm text-gray-500 px-3 py-[10px] w-full rounded-lg border-gray-300 bg-gray-50"
          >
            <option>Select Role</option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Password" />
          </div>
          <TextInput
            id="password1"
            type="password"
            name="password"
            placeholder="Input password"
            value={inputValues.password}
            onChange={handleInputValues}
            required={true}
          />
        </div>
        <div className="flex  justify-between gap-[20px]">
          <Button
            onClick={() => {
              setInputValues({
                email: '',
                role: '',
                password: '',
              });
            }}
            className="bg-gray-300 hover:bg-gray-200 my-[10px] w-full"
          >
            <span className="text-gray-700">Cancel</span>
          </Button>
          <Button className="my-[10px] w-full bg-sky-400" type="submit">
            Register
          </Button>
        </div>
      </form>
    </>
  );
}
