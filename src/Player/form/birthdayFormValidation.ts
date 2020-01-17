import * as yup from 'yup';
import {locale} from './locale';

export default yup.object().shape({
  birthday: yup
    .date()
    .required(locale.BIRTHDAY_NAME_ERROR_REQUIRED)
});
