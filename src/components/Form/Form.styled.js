import styled from 'styled-components';
import { Field, Form, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const FormLabel = styled.label`
  font-size: 25px;
  margin-bottom: 10px;
`;

export const FormInput = styled(Field)`
  padding: 10px;
  outline: none;
  width: 100%;
  height: 20px;
  border: 1px solid #5ac5e8;
  font-size: 20px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const FormButton = styled.button`
  outline: none;
  width: 70%;
  height: 30px;
  border: 1px solid #5ac5e8;
  font-size: 15px;
  border-radius: 10px;
  margin-top: 40px;
  margin-bottom: 10px;
  background-color: white;
`;

export const StyledError = styled(ErrorMessage)`
  color: red;
`;
