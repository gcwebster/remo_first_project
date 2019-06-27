import '../styles/form.scss';
import React from "react";
import { DisplayFormikState } from './helper';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { FormElement } from './FormElement';

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
                        gender: Yup.string()
                            .required('Select your gender'),
                        hobbies: Yup.string()
                            .required('Select your hobbies'),
                        signUp: Yup.string()
                            .required('Select your signUp'),
                        terms: Yup.boolean()
                            .oneOf([true], 'Must accept our terms and conditions')

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
                                <div className="centerFormElement">
                                    <FormElement
                                        type={"text"}
                                        elementId={"firstName"}
                                        title={"First name"}
                                        values={values.firstName}
                                        handleChange={handleChange}
                                        handleBlur={handleBlur}
                                        errors={errors.firstName}
                                        touched={touched.firstName}
                                    />
                                </div>

                                <div />

                                <div className="centerFormElement">

                                    <FormElement
                                        type={"text"}
                                        elementId={"lastName"}
                                        title={"Last name"}
                                        values={values.lastName}
                                        handleChange={handleChange}
                                        handleBlur={handleBlur}
                                        errors={errors.lastName}
                                        touched={touched.lastName}
                                    />
                                </div>

                                <div />

                                <div className="centerFormElement">

                                    <FormElement
                                        type={"text"}
                                        elementId={"email"}
                                        title={"Email"}
                                        values={values.email}
                                        handleChange={handleChange}
                                        handleBlur={handleBlur}
                                        errors={errors.email}
                                        touched={touched.email}
                                    />
                                </div>

                                <div />

                                <div className="centerFormElement">
                                    <FormElement
                                        type={"text"}
                                        elementId={"age"}
                                        title={"Age"}
                                        values={values.age}
                                        handleChange={handleChange}
                                        handleBlur={handleBlur}
                                        errors={errors.age}
                                        touched={touched.age}
                                    />
                                </div>

                                <div />

                                <div className="centerFormElement">
                                    <FormElement
                                        type={"dropdown"}
                                        elementId={"gender"}
                                        title={"Gender"}
                                        label={"Select your gender"}
                                        values={values.gender}
                                        handleChange={handleChange}
                                        handleBlur={handleBlur}
                                        errors={errors.gender}
                                        touched={touched.gender}
                                        options={[
                                            "Male",
                                            "Female"
                                        ]}
                                    />
                                </div>

                                <div />

                                <div className="centerFormElement">
                                    <FormElement
                                        type="radio"
                                        elementId={"hobbies"}
                                        title={"Hobbies"}
                                        radioButtonGroup={"hobbies"}
                                        values={values.hobbies}
                                        handleChange={handleChange}
                                        handleBlur={handleBlur}
                                        errors={errors.hobbies}
                                        touched={touched.hobbies}
                                        options={[
                                            "Kayaking",
                                            "Swimming",
                                            "Airsoft",
                                            "Polo"
                                        ]}
                                    />
                                </div>

                                <div />

                                <div className="centerFormElement">
                                    <FormElement
                                        type={"checkbox"}
                                        elementId={"signUp"}
                                        title={"Sign up"}
                                        checkboxButtonGroup={"signUp"}
                                        values={values.signUp}
                                        handleChange={handleChange}
                                        handleBlur={handleBlur}
                                        errors={errors.signUp}
                                        touched={touched.signUp}
                                        options={[
                                            "Email",
                                            "Mail",
                                            "Text",
                                            "None"
                                        ]}
                                    />
                                </div>

                                <div />

                                <div className="centerFormElement">
                                    <FormElement
                                        type={"checkbox"}
                                        elementId={"terms"}
                                        title={"Terms and conditions"}
                                        checkboxButtonGroup={"terms"}
                                        values={values.terms}
                                        handleChange={handleChange}
                                        handleBlur={handleBlur}
                                        errors={errors.terms}
                                        touched={touched.terms}
                                        options={[
                                            "I agree to the terms and conditions"
                                        ]}
                                    />
                                </div>

                                <div />

                                <div className="centerFormElement">
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
                                </div>

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
