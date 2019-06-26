import '../styles/form.scss';
import React from "react";
import { DisplayFormikState } from './helper';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { FormTextInputElement } from './FormTextInputElement';
import { FormDropdownInputElement } from './FormDropdownInputElement';

/*
ToDo:
- Fix bug where on reset button click page disappears.
*/
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
                        colour: Yup.string()
                            .required('Choose a colour')

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
                                <FormTextInputElement
                                    elementId={"firstName"}
                                    title={"First name"}
                                    values={values.firstName}
                                    handleChange={handleChange}
                                    handleBlur={handleBlur}
                                    errors={errors.firstName}
                                    touched={touched.firstName}
                                />
                                <div />

                                <FormTextInputElement
                                    elementId={"lastName"}
                                    title={"Last name"}
                                    values={values.lastName}
                                    handleChange={handleChange}
                                    handleBlur={handleBlur}
                                    errors={errors.lastName}
                                    touched={touched.lastName}
                                />
                                <div />

                                <FormTextInputElement
                                    elementId={"email"}
                                    title={"Email"}
                                    values={values.email}
                                    handleChange={handleChange}
                                    handleBlur={handleBlur}
                                    errors={errors.email}
                                    touched={touched.email}
                                />
                                <div />

                                <FormTextInputElement
                                    elementId={"age"}
                                    title={"Age"}
                                    values={values.age}
                                    handleChange={handleChange}
                                    handleBlur={handleBlur}
                                    errors={errors.age}
                                    touched={touched.age}
                                />
                                <div />

                                <FormDropdownInputElement
                                    elementId={"colour"}
                                    title={"Colour"}
                                    label={"Select a colour"}
                                    values={values.colour}
                                    handleChange={handleChange}
                                    handleBlur={handleBlur}
                                    errors={errors.colour}
                                    touched={touched.colour}
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
