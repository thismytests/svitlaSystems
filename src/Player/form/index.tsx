import React from 'react';

// formik
import {Form, Formik} from 'formik';

// material ui
import {Grid, Typography, NoSsr} from '@material-ui/core';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

// form validation
import validationSchema from './birthdayFormValidation';

// localization
import {locale} from './locale';

// types
import {BirthdayFormProps, BurthdayFormData} from './type';
import {useContext} from 'react';
import {DTOContext} from '../formDTOContext';


const FORMS_NAMES = {
    BIRTHDAY: 'birthday'
};

export default function NamesForm(
    {
        onSubmit,
        isSubmitting,
        errorCode
    }: BirthdayFormProps) {

    const context = useContext(DTOContext);

    const initialFormValues = {
        [FORMS_NAMES.BIRTHDAY]: ''
    };

    return (
        <NoSsr>
            <Formik
                initialValues={initialFormValues}
                validationSchema={validationSchema}
                isInitialValid={validationSchema.isValidSync(initialFormValues)}
                onSubmit={(input, actions) => {
                    actions.setSubmitting(true);

                    const {birthday} = input;

                    const formData: BurthdayFormData = {
                        birthday: new Date(birthday)
                    };

                    // todo ... Mykolai Lytvyn ... Will be discussed
                    // context.setBirthdayFormData({birthday});

                    return onSubmit(formData).finally(() => actions.setSubmitting(false));
                }}
            >
                {({values}) => (
                    <Form>
                        {!isSubmitting && (
                            <Grid container spacing={3} alignItems="center">

                                {/*Title*/}
                                <Grid item xs={12}>
                                    {locale.TITLE}
                                </Grid>

                                {/*Sub title*/}
                                <Grid item xs={12}>
                                    {locale.SUBTITLE}
                                </Grid>

                                {/*birthday name*/}
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        name={FORMS_NAMES.BIRTHDAY}
                                        id={FORMS_NAMES.BIRTHDAY}
                                        variant="outlined"
                                        type="date"
                                    />
                                </Grid>

                                {/*submit button*/}
                                <Button color="secondary"
                                        type="submit">
                                    Secondary
                                </Button>

                                {/*  error code*/}
                                {errorCode && (
                                    <Grid item xs={12}>
                                        <Typography color="error">{errorCode}</Typography>
                                    </Grid>
                                )}
                            </Grid>
                        )}
                    </Form>
                )}
            </Formik>
        </NoSsr>
    );
}
