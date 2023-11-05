import * as yup from 'yup';

export const menuValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  availability_start: yup.date().required(),
  availability_end: yup.date().required(),
  restaurant_id: yup.string().nullable().required(),
});
