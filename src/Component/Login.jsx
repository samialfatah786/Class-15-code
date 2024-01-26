// Login.js
import React, { useState } from 'react';
import { Button, Container, Stack } from '@mui/material';
import { Input_Component } from '../components/Input_Component';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [user_data, setUserData] = useState({});
  const navigate = useNavigate();

  const onChangeHandle = (e) => {
    const value = e.target.value;
    const id = e.target.id;
    setUserData({ ...user_data, [id]: value });
  };

  const submit_handle = (e) => {
    e.preventDefault();
    console.log('data', user_data);
    navigate('/');
  };

  return (
    <Container>
      <Stack>
        <form onSubmit={submit_handle}>
          <Input_Component
            placeholder={'Email address'}
            type={'email'}
            id={'email'}
            required={true}
            onChange={onChangeHandle}
          />
          <Input_Component
            required={true}
            placeholder={'Password'}
            type={'password'}
            id={'password'}
            onChange={onChangeHandle}
          />
          <Button type='submit'>Submit Details</Button>
        </form>
      </Stack>
    </Container>
  );
};

export { Login };
