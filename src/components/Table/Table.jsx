import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Formik } from 'formik';
import Pagination from '@mui/material/Pagination';
import { fetchCars, deleteCar, editCar, addCar } from '../../redux/operations';
import Modal from '../Modal/Modal';
import { editValidation } from '../../utils/editValidation';
import * as Styled from './Table.styled';
import { addValidation } from '../../utils/addValidation';

const initialValues = {
  car_color: '',
  price: '',
  availability: '',
};

const initialAddValues = {
  car: '',
  car_model: '',
  car_vin: '',
  car_model_year: '',
  car_color: '',
  price: '',
  availability: '',
};

const Table = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState('');

  const [id, setId] = useState(1);
  const dispatch = useDispatch();
  const items = useSelector(state => state.cars.items);
  const itemsPerPage = 15;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  useEffect(() => {
    if (!items) {
      dispatch(fetchCars());
    }
  }, [dispatch, items]);

  const handleActionSelect = (itemId, action) => {
    setId(itemId);
    if (action === 'delete') {
      setShowDeleteModal(true);
    } else if (action === 'edit') {
      setShowUpdateModal(true);
    }
  };

  const handleClick = () => {
    setShowDeleteModal(false);
    setShowUpdateModal(false);
    setShowAddModal(false);
  };

  const handleDelete = () => {
    dispatch(deleteCar(id));
    handleClick();
  };

  const handleEdit = (values, { resetForm }) => {
    const data = {
      values,
      id,
    };
    dispatch(editCar(data));
    resetForm();
    handleClick();
  };

  const handleAddSubmit = (values, { resetForm }) => {
    dispatch(addCar(values));
    resetForm();
    handleClick();
  };

  const handleSearch = e => {
    setSearchValue(e.target.value);
  };

  const filtredContacts = items.filter(
    item =>
      item.car.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.car_model.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.car_vin.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.car_color.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.car_model_year.toString().includes(searchValue) ||
      item.price.includes(searchValue) ||
      item.availability.toString().includes(searchValue.toLowerCase())
  );

  const visibleItems = filtredContacts.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filtredContacts.length / itemsPerPage);

  return (
    <>
      <input onChange={handleSearch} value={searchValue} />
      <button type="submit" onClick={() => setShowAddModal(true)}>
        Add car
      </button>

      <Styled.Table>
        <Styled.Thead>
          <tr>
            <Styled.TableHeader>Company</Styled.TableHeader>
            <Styled.TableHeader>Model</Styled.TableHeader>
            <Styled.TableHeader>VIN</Styled.TableHeader>
            <Styled.TableHeader>Color</Styled.TableHeader>
            <Styled.TableHeader>Year</Styled.TableHeader>
            <Styled.TableHeader>Price</Styled.TableHeader>
            <Styled.TableHeader>Availability</Styled.TableHeader>
            <Styled.TableHeader>Actions</Styled.TableHeader>
          </tr>
        </Styled.Thead>
        <Styled.Tbody>
          {visibleItems.map(item => (
            <tr key={item.id}>
              <Styled.TableData>{item.car}</Styled.TableData>
              <Styled.TableData>{item.car_model}</Styled.TableData>
              <Styled.TableData>{item.car_vin}</Styled.TableData>
              <Styled.TableData>{item.car_color}</Styled.TableData>
              <Styled.TableData>{item.car_model_year}</Styled.TableData>
              <Styled.TableData>{item.price}</Styled.TableData>
              <Styled.TableData>{item.availability.toString()}</Styled.TableData>
              <Styled.TableDataSelector>
                <Styled.Select onChange={e => handleActionSelect(item.id, e.target.value)}>
                  <option value="">Select an action</option>
                  <option value="edit">Edit</option>
                  <option value="delete">Delete</option>
                </Styled.Select>
              </Styled.TableDataSelector>
            </tr>
          ))}
        </Styled.Tbody>
      </Styled.Table>
      <Styled.PaginationWraper>
        <Pagination
          count={totalPages}
          onChange={(event, page) => setCurrentPage(page)}
          page={currentPage}
          shape="rounded"
        />
      </Styled.PaginationWraper>

      {showDeleteModal && (
        <Modal onClick={handleClick}>
          <Styled.DeleteModal>
            <Styled.TextModal>Are you sure, that you want to perform this action?</Styled.TextModal>
            <div>
              <Styled.ButtonModal onClick={handleDelete}>Yes</Styled.ButtonModal>
              <Styled.ButtonModal onClick={handleClick}>No</Styled.ButtonModal>
            </div>
          </Styled.DeleteModal>
        </Modal>
      )}
      {showUpdateModal && (
        <Modal onClick={handleClick}>
          <Styled.UpdateModal>
            <Styled.ModalTitle>Edit</Styled.ModalTitle>
            <Formik
              onSubmit={handleEdit}
              initialValues={initialValues}
              validationSchema={editValidation}
            >
              <Styled.Form>
                <Styled.InputWraper>
                  <p>Company</p>
                  <Styled.Input type="text" name="car" disabled />
                </Styled.InputWraper>
                <Styled.InputWraper>
                  <p>Model</p>
                  <Styled.Input type="text" name="car_model" disabled />
                </Styled.InputWraper>
                <Styled.InputWraper>
                  <p>VIN</p>
                  <Styled.Input type="text" name="car_vin" disabled />
                </Styled.InputWraper>
                <Styled.InputWraper>
                  <p>Year</p>
                  <Styled.Input type="text" name="car_model_year" disabled />
                </Styled.InputWraper>

                <Styled.InputWraper>
                  <p>Color</p>
                  <Styled.Input type="text" name="car_color" />
                  <Styled.ErrorMessage component="span" name="car_color" />
                </Styled.InputWraper>
                <Styled.InputWraper>
                  <p>Price</p>
                  <Styled.Input type="text" name="price" />
                  <Styled.ErrorMessage component="span" name="price" />
                </Styled.InputWraper>
                <Styled.InputWraper>
                  <p>Availability</p>
                  <Styled.Input type="text" name="availability" />
                  <Styled.ErrorMessage component="span" name="availability" />
                </Styled.InputWraper>
                <Styled.ButtonModal type="submit">Edit</Styled.ButtonModal>
              </Styled.Form>
            </Formik>
          </Styled.UpdateModal>
        </Modal>
      )}
      {showAddModal && (
        <Modal onClick={handleClick}>
          <Styled.UpdateModal>
            <Styled.ModalTitle>Add car</Styled.ModalTitle>
            <Formik
              onSubmit={handleAddSubmit}
              initialValues={initialAddValues}
              validationSchema={addValidation}
            >
              <Styled.Form>
                <Styled.InputWraper>
                  <p>Company</p>
                  <Styled.Input type="text" name="car" />
                  <Styled.ErrorMessage component="span" name="car" />
                </Styled.InputWraper>
                <Styled.InputWraper>
                  <p>Model</p>
                  <Styled.Input type="text" name="car_model" />
                  <Styled.ErrorMessage component="span" name="car_model" />
                </Styled.InputWraper>
                <Styled.InputWraper>
                  <p>VIN</p>
                  <Styled.Input type="text" name="car_vin" />
                  <Styled.ErrorMessage component="span" name="car_vin" />
                </Styled.InputWraper>
                <Styled.InputWraper>
                  <p>Year</p>
                  <Styled.Input type="text" name="car_model_year" />
                  <Styled.ErrorMessage component="span" name="car_model_year" />
                </Styled.InputWraper>

                <Styled.InputWraper>
                  <p>Color</p>
                  <Styled.Input type="text" name="car_color" />
                  <Styled.ErrorMessage component="span" name="car_color" />
                </Styled.InputWraper>
                <Styled.InputWraper>
                  <p>Price</p>
                  <Styled.Input type="text" name="price" />
                  <Styled.ErrorMessage component="span" name="price" />
                </Styled.InputWraper>
                <Styled.InputWraper>
                  <p>Availability</p>
                  <Styled.Input type="text" name="availability" />
                  <Styled.ErrorMessage component="span" name="availability" />
                </Styled.InputWraper>
                <Styled.ButtonModal type="submit">Add car</Styled.ButtonModal>
              </Styled.Form>
            </Formik>
          </Styled.UpdateModal>
        </Modal>
      )}
    </>
  );
};

export default Table;
