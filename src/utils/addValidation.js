import * as yup from 'yup';

export const addValidation = yup.object().shape({
  car: yup
    .string()
    .matches(
      /^(?:[A-ZА-ЯЁ][A-ZА-ЯЁa-zа-яё]*)$/,
      'Please enter car company with the first letter capitalized'
    )
    .required('Please enter car company'),
  car_model: yup.string().required('Please enter car model'),
  car_vin: yup.string().required('Please enter car model'),
  car_model_year: yup
    .string()
    .matches(/^\d+$/, 'Please enter a valid car model year (digits only)')
    .required('Please enter car model year'),
  car_color: yup
    .string()
    .matches(
      /^(?:[A-ZА-ЯЁ][A-ZА-ЯЁa-zа-яё]*)$/,
      'Please enter car color with the first letter capitalized'
    )
    .required('Please enter car color'),
  price: yup
    .string()
    .matches(/^\$[0-9.]+$/, 'Please enter a valid price (e.g. $1234.56)')
    .required('Please enter price'),
  availability: yup.boolean().required('Please enter car availability (true, false)'),
});
