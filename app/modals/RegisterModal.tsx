'use client';

import axios from 'axios';
import { AiFillGithub } from 'react-icons/ai';
import {FcGoogle} from 'react-icons/fc';
import {useCallback, useState} from 'react';
import {
  FieldValues,
  SubmitHandler,
  useForm
} from 'react-hook-form'

import useRegisterModal from '../hooks/useRegisterModal';
import Modal from './Modal';
import Heading from '../components/Heading';
import Input from '../components/inputs/input';
import { toast } from 'react-hot-toast';
import Button from '../components/Button';
import LoginModal from './LoginModal';
import useLoginModal from '../hooks/useLoginModal';

const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: {
      errors,
    }
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    }
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    axios.post('/api/register', data)
    .then(() => {
      registerModal.onClose();
      loginModal.onOpen();
    })
    .catch((error) => {
      toast.error("register post api failed");
      console.log(error);
    })
    .finally(() => {
      setIsLoading(false);
    })
  }

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading 
      title="welcome to Airbnb"
      subtitle="Create an account" />
      <Input 
       id="email"
       label="Email"
       disabled={isLoading}
       register={register}
       errors={errors}
       required
      />
       <Input 
       id="name"
       label="Name"
       disabled={isLoading}
       register={register}
       errors={errors}
       required
      />
       <Input 
       id="password"
       type="password"
       label="password"
       disabled={isLoading}
       register={register}
       errors={errors}
       required
      />
      
    </div>
  )

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">

      <hr />
      <Button
      outline
      label="Continue with Google"
      icon={FcGoogle}
      onClick={() => {
        
      }}/>
      <Button
      outline
      label="Continue with GitHub"
      icon={AiFillGithub}
      onClick={() => {
        
      }}/>
      <div 
        className="
          text-neutral-500 
          text-center 
          mt-4 
          font-light
        "
      >
        <p>Already have an account?
          <span 
            onClick={registerModal.onClose} 
            className="
              text-neutral-800
              cursor-pointer 
              hover:underline
            "
            > Log in</span>
        </p>
      </div>
    </div>
  )
  return (
    <Modal
    disabled={isLoading}
    isOpen={registerModal.isOpen}
    title="Register"
    actionLabel='Continue'
    onClose={registerModal.onClose}
    onSubmit={handleSubmit(onSubmit)}
    body={bodyContent}
    footer={footerContent}/>
  )
}

export default RegisterModal