import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

// material
import Box from '@material-ui/core/Box';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import NoSsr from '@material-ui/core/NoSsr';

// components
import NamesForm from './forms/namesForm';
import BurthdayForm from './forms/birthdayForm';
import ResidentialAddressForm from './forms/residentalAddressForm';
import PhoneForm from './forms/phoneForm';

// types
import {
  NamesFormData,
  NamesFormProps
} from './forms/namesForm/type';
import {
  BurthdayFormData,
  BirthdayFormProps
} from './forms/birthdayForm/type';
import {
  ResidentialAddressFormData,
  ResidentialAddressFormProps
} from './forms/residentalAddressForm/type';
import {
  PhoneFormData,
  PhoneFormProps
} from './forms/phoneForm/type';

// hooks
import iteratorHook from './forms/iteratorHook';

// dto
import { DTOProvider } from './formDTOContext';

import { FormattedMessage } from 'react-intl';

// locale
import { locale } from './locale';

export interface SignupFormProps {
  onReadyForm: (data: any) => void;
  data: {
    phoneFormPropsConfig: PhoneFormData,
    namesFormPropsConfig: NamesFormData,
    birthdayFormPropsConfig: BurthdayFormData,
    residentalFormPropsConfig: ResidentialAddressFormData
  }
}

const useStyles = makeStyles(theme => ({
  title: {
    cursor: 'pointer'
  }
}));

const SignupForm = function SignupForm({ onReadyForm, data }: SignupFormProps) {
  const { activeStep, getNext, getPrev } = iteratorHook({
    countOfComponents: 4
  });

  const { phoneFormPropsConfig, namesFormPropsConfig, birthdayFormPropsConfig, residentalFormPropsConfig } = data;


  const classes = useStyles();

  /*forms state*/
  const [phoneForm, setPhoneForm] = useState(phoneFormPropsConfig as PhoneFormData);

  const [namesForm, setNamesForm] = useState(namesFormPropsConfig as NamesFormData);

  const [birthdayForm, setBirthdayForm] = useState(birthdayFormPropsConfig as BurthdayFormData);

  const [residentalForm, setResidentalForm] = useState(
    residentalFormPropsConfig as ResidentialAddressFormData
  );
  /*forms state*/
  const [isFormFinished, setFormFinished] = useState(false);

  useEffect(() => {
    if (!isFormFinished) return;

    onReadyForm(outpuData());
  }, [isFormFinished]);

  const namesFormData: NamesFormProps = {
    errorCode: '',
    isSubmitting: false,
    onSubmit: function(p1: NamesFormData) {
      getNext();
      return Promise.resolve();
    }
  };

  const birthDayFormData: BirthdayFormProps = {
    errorCode: '',
    isSubmitting: false,
    onSubmit: function(p1: BurthdayFormData) {
      getNext();
      return Promise.resolve();
    }
  };

  const residentialAddressFormProps: ResidentialAddressFormProps = {
    errorCode: '',
    isSubmitting: false,
    onSubmit: function(p1: ResidentialAddressFormData) {
      /*next step*/
      getNext();
      return Promise.resolve();
    }
  };

  const phoneFormProps: PhoneFormProps = {
    errorCode: '',
    isPolling: false,
    isSubmitting: false,
    onSubmit: function(p1: PhoneFormData) {
      setFormFinished(true);

      return Promise.resolve();
    },
    stopPolling: function() {
    }
  };

  const outpuData = (): NamesFormData &
    BurthdayFormData &
    ResidentialAddressFormData &
    PhoneFormData => {
    return {
      ...phoneForm,
      ...namesForm,
      ...birthdayForm,
      ...residentalForm
    };
  };
  return (
    <NoSsr>
      <DTOProvider
        value={{
          namesFormData: namesForm,
          setNamesFormData: setNamesForm,
          birthdayFormData: birthdayForm,
          setBirthdayFormData: setBirthdayForm,
          residentialAddressFormData: residentalForm,
          setResidentialAddressFormData: setResidentalForm,
          phoneFormData: phoneForm,
          setPhoneFormData: setPhoneForm
        }}
      >
        <Box>
          <h1 onClick={getPrev} className={classes.title}>
            <ArrowBackIcon/>
            <FormattedMessage id={locale.PERSONAL_DETAILS}/>
          </h1>

          <Box>
            {activeStep === 0 && <NamesForm {...namesFormData} />}
            {activeStep === 1 && <BurthdayForm {...birthDayFormData} />}
            {activeStep === 2 && (
              <ResidentialAddressForm {...residentialAddressFormProps} />
            )}

            {/*attention it is  last step, check props*/}
            {activeStep === 3 && <PhoneForm {...phoneFormProps} />}
          </Box>
        </Box>
      </DTOProvider>
    </NoSsr>
  );
};

SignupForm.defaultProps = {
  onReadyForm: () => {
    console.log('must be implemented :');
  }
};

export default SignupForm;
