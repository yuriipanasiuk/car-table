import * as yup from 'yup';

export const editValidation = yup.object().shape({
  car_color: yup
    .string()
    .matches(
      /^(?:[A-ZА-ЯЁ][A-ZА-ЯЁa-zа-яё]*)$/,
      'Please enter car company with the first letter capitalized'
    )
    .required('Please enter car color'),
  price: yup
    .string()
    .matches(/^\$[0-9.]+$/, 'Please enter a valid price (e.g. $1234.56)')
    .required('Please enter price'),
  availability: yup.boolean().required('Please enter car availability (true, false)'),
});
