import '../styles/form.scss';
import React from 'react';
import { DisplayFormikState } from './helper';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { FormElement } from './FormElement';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true
        }
    }

    render() {
        return (
            <div>
                <h2>This form will validate an email using Formik</h2>
                <p>Try to enter an email below:</p>

                <Formik
                    // initialValues={{ firstName: '', lastName: '', email: '', age: '', gender: '', Kayaking: 'false', Swimming: 'false', Airsoft: 'false', Polo: 'false', signUp: '', terms: '' }}
                    initialValues={{ firstName: '', lastName: '', email: '', age: '', gender: '', signUp: '', terms: '', hobbies: '' }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 500);
                    }}
                    validationSchema={Yup.object().shape({
                        firstName: Yup.string()
                            .min(2, 'Too short')
                            .max(50, 'too long')
                            .required('First name is required'),
                        lastName: Yup.string()
                            .min(2, 'Too short')
                            .max(50, 'too long')
                            .required('Last name is required'),
                        email: Yup.string()
                            .email()
                            .required('Email is required'),
                        age: Yup.number()
                            .min(18, 'You must be older than 18')
                            .max(110, 'Enter your actual age')
                            .required(' Age is required'),
                        gender: Yup.string()
                            .required('Select your gender'),
                        terms: Yup.boolean()
                            .oneOf([true], 'Must accept our terms and conditions')
                            .required('You must accept our terms and conditions')

                    })}
                >
                    {props => {
                        const {
                            values,
                            touched,
                            errors,
                            dirty,
                            isSubmitting,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            handleReset,
                        } = props;
                        return (
                            <form onSubmit={handleSubmit}>
                                {/* {console.log(handleSubmit)}
                                {console.log(handleReset)} */}
                                <div className="centerFormElement">
                                    <FormElement
                                        type={'text'}
                                        elementId={'firstName'}
                                        title={'First name'}
                                        values={values.firstName}
                                        handleChange={handleChange}
                                        handleBlur={handleBlur}
                                        errors={errors.firstName}
                                        touched={touched.firstName}
                                    />

                                    <FormElement
                                        type={'text'}
                                        elementId={'lastName'}
                                        title={'Last name'}
                                        values={values.lastName}
                                        handleChange={handleChange}
                                        handleBlur={handleBlur}
                                        errors={errors.lastName}
                                        touched={touched.lastName}
                                    />

                                    <FormElement
                                        type={'text'}
                                        elementId={'email'}
                                        title={'Email'}
                                        values={values.email}
                                        handleChange={handleChange}
                                        handleBlur={handleBlur}
                                        errors={errors.email}
                                        touched={touched.email}
                                    />

                                    <FormElement
                                        type={'number'}
                                        elementId={'age'}
                                        title={'Age'}
                                        values={values.age}
                                        handleChange={handleChange}
                                        handleBlur={handleBlur}
                                        errors={errors.age}
                                        touched={touched.age}
                                    />

                                    <FormElement
                                        type={'dropdown'}
                                        elementId={'gender'}
                                        title={'Gender'}
                                        label={'Select your gender'}
                                        values={values.gender}
                                        handleChange={handleChange}
                                        handleBlur={handleBlur}
                                        errors={errors.gender}
                                        touched={touched.gender}
                                        options={[
                                            'Male',
                                            'Female'
                                        ]}
                                    />

                                    <FormElement
                                        type="checkbox"
                                        elementId={'hobbies'}
                                        title={'Hobbies'}
                                        category={'hobbies'}
                                        values={values.hobbies}
                                        handleChange={handleChange}
                                        handleBlur={handleBlur}
                                        errors={errors.hobbies}
                                        touched={touched.hobbies}
                                        options={[
                                            'Kayaking',
                                            'Swimming',
                                            'Airsoft',
                                            'Polo'
                                        ]}
                                    />

                                    <FormElement
                                        type={'radio'}
                                        elementId={'signUp'}
                                        title={'Sign up'}
                                        category={'signUp'}
                                        values={values.signUp}
                                        handleChange={handleChange}
                                        handleBlur={handleBlur}
                                        errors={errors.signUp}
                                        touched={touched.signUp}
                                        options={[
                                            'Email',
                                            'Mail',
                                            'Text',
                                            'None'
                                        ]}
                                    />

                                    <FormElement
                                        type={'terms'}
                                        elementId={'terms'}
                                        title={'Terms and conditions'}
                                        checkboxButtonGroup={'terms'}
                                        values={values.terms}
                                        handleChange={handleChange}
                                        handleBlur={handleBlur}
                                        errors={errors.terms}
                                        touched={touched.terms}
                                        option={'I agree to the terms and conditions'}
                                    />

                                    <button
                                        className="resetButton"
                                        type="button"
                                        onClick={handleReset}
                                        disabled={!dirty || isSubmitting}
                                    >
                                        Reset
                                    </button>
                                    <button
                                        className="submitButton"
                                        type="submit"
                                        disabled={isSubmitting || !dirty || dirty && (!isEmpty(errors))}
                                    >
                                        Submit
                                    </button>
                                    <div />
                                </div>
                                <button onClick={() => this.setState({ show: !this.state.show })}>
                                    {this.state.show ? 'Hide' : 'Show'} current form state
                                </button>
                                <DisplayFormikState {...props} display={this.state.show} />
                            </form>
                        );
                    }}
                </Formik>
            </div >
        )
    }
}

function isEmpty(object) {
    return Object.getOwnPropertyNames(object).length === 0;
}

export { Form }
