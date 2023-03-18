import axios from 'axios';
import { Label, TextInput, Button } from 'flowbite-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../actions/actionType';

export default function FormProtergo({ textButton, headerForm }) {
  const navigate = useNavigate();
  const [inputValues, setInputValues] = useState({
    email: '',
    password: '',
  });

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
      if (textButton === 'Login') {
        const { data } = await axios({
          method: 'POST',
          url: `${BASE_URL}/users/login`,
          data: inputValues,
        });
        localStorage.setItem('access_token', data.access_token);
        localStorage.setItem('role', data.role);
        if (data.role === 'admin') {
          navigate('/');
        } else {
          navigate('/home');
        }
        await Toast.fire({
          icon: 'success',
          iconColor: '#4ade80',
          width: 'auto',
          title: `Success Login`,
        });
      } else {
        await axios({
          method: 'POST',
          url: `${BASE_URL}/admins/register`,
          data: inputValues,
        });
        navigate('/login');
        await Toast.fire({
          icon: 'success',
          iconColor: '#4ade80',
          width: 'auto',
          title: `User has been added`,
        });
      }
    } catch (error) {
      console.log(error.message);
      await Toast.fire({
        icon: 'warning',
        iconColor: '#f87171',
        width: 'auto',
        title: `Invalid Username / Password`,
      });
    }
  };

  return (
    <>
      <div className="flex h-full flex-col justify-center">
        <div className="flex justify-center">
          <img
            src="https://protergo.id/wp-content/uploads/2020/10/protergo-logo-avtar.png"
            className="mr-3 h-14 sm:h-20"
            alt="Protergo Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            {headerForm}
          </span>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center gap-4 p-[30px] md:px-[25%]"
        >
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput
              id="email1"
              type="email"
              name="email"
              value={inputValues.email}
              onChange={handleInputValues}
              placeholder="Type your email"
              required={true}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput
              id="password1"
              type="password"
              required={true}
              name="password"
              value={inputValues.password}
              onChange={handleInputValues}
              placeholder="Type your password"
            />
          </div>
          <div className="flex flex-col justify-between gap-[20px] py-[10px]">
            <Button type="submit" className="w-full bg-sky-400">
              {textButton}
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
