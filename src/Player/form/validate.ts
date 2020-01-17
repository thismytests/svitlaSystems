// formik
import { FormikErrors } from 'formik';

// locale
import { locale } from './locale';

const isValidBirthday = (dateOfBirthdayString: Date, ageAllowed: number): boolean => {
  const dateOfBirthday: Date = new Date(dateOfBirthdayString);

  const dateOfBirthdayYear: number = dateOfBirthday.getFullYear(),
    dateOfBirthdayMonth: number = dateOfBirthday.getMonth(),
    dateOfBirthdayDay: number = dateOfBirthday.getDate(),
    adulthoodDate: Date = new Date(dateOfBirthdayYear + ageAllowed,
      dateOfBirthdayMonth,
      dateOfBirthdayDay
    ),
    currentDate: Date = new Date();

  return (adulthoodDate < currentDate);
};

export const validateConfig = (ageAllowed: number) =>
  (values: { [x: string]: any; })
    : void | object | Promise<FormikErrors<{ [x: string]: any; }>> => {
    const validator = () => {
      if (!isValidBirthday(values?.birthday, ageAllowed)) {
        return {
          birthday: locale.BIRTHDAY_NAME_ERROR_AGE
        };
      }
    };

    return validator();
  };
