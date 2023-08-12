import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  StyledForm,
  FormInput,
  FormLabel,
  FormButton,
  StyledError,
} from './Form.styled';

const SignupSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').required('Required'),
});

export const ContactForm = ({ onAddContact }) => {
  return (
    <Formik
      initialValues={{
        name: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, actions) => {
        onAddContact({ ...values, id: nanoid() });
        actions.resetForm();
      }}
    >
      <StyledForm>
        <FormLabel htmlFor="name">Name</FormLabel>
        <FormInput type="text" name="name" placeholder="Ivan Ivanenko" />
        <StyledError name="name" component="div" />
        <FormButton type="submit">Add contact</FormButton>
      </StyledForm>
    </Formik>
  );
};
