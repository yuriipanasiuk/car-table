import styled from '@emotion/styled';
import { Field, Form as FormikForm, ErrorMessage as ErrorFormicError } from 'formik';
import { RxCross2 } from 'react-icons/rx';

export const DeleteModal = styled('div')`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 500px;
  height: 300px;
  background-color: white;
  border-radius: 10px;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`;

export const CloseButton = styled(RxCross2)`
  position: absolute;
  top: 12px;
  right: 12px;
  cursor: pointer;
  transition: color 250ms cubic-bezier(0.075, 0.82, 0.165, 1);

  :hover {
    color: #ddd;
  }
`;

export const TextModal = styled(`p`)`
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 50px;
`;

export const ButtonModal = styled('button')`
  width: 100px;
  height: 30px;
  border-radius: 5px;
  border: none;
  background-color: #ddd;
  cursor: pointer;
  color: black;
  font-size: 18px;
  text-transform: uppercase;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  transition: background-color 250ms cubic-bezier(0.075, 0.82, 0.165, 1);

  :not(:last-child) {
    margin-right: 40px;
  }

  :hover {
    background-color: silver;
    scale: 1.1;
    color: white;
  }
`;

export const UpdateModal = styled('div')`
  position: relative;
  padding: 20px;
  width: 500px;
  height: auto;
  background-color: white;
  border-radius: 10px;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`;

export const Input = styled(Field)`
  width: 460px;
  height: 30px;
  border-radius: 10px;
  outline: none;
  border: 1px solid #ddd;
  padding: 8px;
`;

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ModalTitle = styled('p')`
  margin-bottom: 20px;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
`;

export const InputWraper = styled('div')`
  position: relative;
  margin-bottom: 12px;
`;

export const PaginationWraper = styled('div')`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const Table = styled('table')`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
`;

export const Thead = styled('thead')`
  background-color: #f5f5f5;
`;

export const TableHeader = styled('th')`
  padding: 10px;
  border-bottom: 1px solid #ddd;
  text-align: left;
  text-transform: uppercase;
  border-right: 1px solid #ddd;
  text-align: center;
  font-size: 18px;
  &:first-of-type {
    border-left: 1px solid #ddd;
  }
`;

export const TableData = styled('td')`
  padding: 10px;
  border-bottom: 1px solid #ddd;
  border-right: 1px solid #ddd;
  font-size: 16px;
  &:first-of-type {
    border-left: 1px solid #ddd;
  }
`;

export const Tbody = styled('tbody')``;

export const Select = styled('select')`
  padding: 5px;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
`;

export const TableDataSelector = styled('td')`
  padding: 8px;
  border-bottom: 1px solid #ddd;
  border-right: 1px solid #ddd;
  text-align: center;

  &:first-of-type {
    border-left: 1px solid #ddd;
  }
`;

export const ErrorMessage = styled(ErrorFormicError)`
  position: absolute;
  color: red;
  top: 50px;
  left: 0px;

  font-size: 12px;
`;

export const SearchInput = styled('input')`
  width: 400px;
  height: 40px;

  padding-left: 8px;
  border: none;
  outline: none;
  font-size: 16px;
  border-bottom: 1px solid #ddd;
`;

export const Wraper = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const AddButton = styled('button')`
  width: 200px;
  height: 30px;
  border-radius: 5px;
  border: none;
  background-color: #ddd;
  cursor: pointer;
  color: black;
  font-size: 18px;
  text-transform: uppercase;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  transition: background-color 250ms cubic-bezier(0.075, 0.82, 0.165, 1);

  :hover {
    background-color: silver;
    scale: 1.1;
    color: white;
  }
`;
