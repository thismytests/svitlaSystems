import React, {useState, useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';

// material
import Box from '@material-ui/core/Box';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import NoSsr from '@material-ui/core/NoSsr';

// components
import BurthdayForm from './form';

// types

import {
    BurthdayFormData,
    BirthdayFormProps
} from './form/type';

// hooks
import iteratorHook from './iteratorHook';

// dto
import {DTOProvider} from './formDTOContext';

// locale
import {locale} from './locale';

export interface SignupFormProps {
    onReadyForm: (data: any) => void;
    data: any
}

const useStyles = makeStyles(theme => ({
    title: {
        cursor: 'pointer'
    }
}));

const SignupForm = function SignupForm({onReadyForm, data}: SignupFormProps) {
    const {activeStep, getNext, getPrev} = iteratorHook({
        countOfComponents: 4
    });

    const {phoneFormPropsConfig, namesFormPropsConfig, birthdayFormPropsConfig, residentalFormPropsConfig} = data;


    const classes = useStyles();

    /*forms state*/
    const [birthdayForm, setBirthdayForm] = useState(birthdayFormPropsConfig as BurthdayFormData);

    /*forms state*/
    const [isFormFinished, setFormFinished] = useState(false);


    const outpuData = (): any => {
        return {
            'data': 'data'
        };
    };

    useEffect(() => {
        if (!isFormFinished) return;

        onReadyForm(outpuData());
    }, [isFormFinished]);

    const birthDayFormData: BirthdayFormProps = {
        errorCode: '',
        isSubmitting: false,
        onSubmit: function (p1: BurthdayFormData) {
            getNext();
            return Promise.resolve();
        }
    };

    return (
        <NoSsr>
            <DTOProvider
                value={{
                    birthdayFormData: birthdayForm,
                }}
            >
                <Box>
                    <h1 onClick={getPrev} className={classes.title}>
                        <ArrowBackIcon/>
                    </h1>

                    <Box>
                        {activeStep === 0 && <BurthdayForm {...birthDayFormData} />}
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
