import '../styles/form.scss';
import React from "react";
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
                    initialValues={{ email: '' }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 500);
                    }}
                    validationSchema={Yup.object().shape({
                        email: Yup.string()
                            .email()
                            .required('Email is required'),
                        firstName: Yup.string()
                            .min(2, 'Too short')
                            .max(50, 'too long')
                            .required('First name is required'),
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
                                <FormElement
                                    elementId={"firstName"}
                                    title={"First name"}
                                    values={values.firstName}
                                    handleChange={handleChange}
                                    handleBlur={handleBlur}
                                    errors={errors.firstName}
                                    touched={touched.firstName}
                                />

                                <div />

                                <FormElement
                                    elementId={"email"}
                                    title={"email"}
                                    values={values.email}
                                    handleChange={handleChange}
                                    handleBlur={handleBlur}
                                    errors={errors.email}
                                    touched={touched.email}
                                />






                                <button
                                    type="button"
                                    className="outline"
                                    onClick={handleReset}
                                    disabled={!dirty || isSubmitting}
                                >
                                    Reset
                                </button>
                                <button type="submit" disabled={isSubmitting}>
                                    Submit
                                </button>
                                <div />
                                <button onClick={() => this.setState({ show: !this.state.show })}>
                                    {this.state.show ? "Hide" : "Show"} current form state
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

export { Form }
