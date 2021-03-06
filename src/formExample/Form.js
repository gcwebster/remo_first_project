import '../styles/form.scss';
import React from 'react';
import { DisplayFormikState } from './helper';
import { Formik } from 'formik';
import * as Yup from 'yup';

class FormExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true
        }
    }

    render() {
        return (
            <div>
                <h2>This is an EXAMPLE form</h2>
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
                            .required('Required'),
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
                                <label htmlFor="email" style={{ display: 'block' }}>
                                    Email
                                </label>
                                <input
                                    id="email"
                                    placeholder="Enter your email"
                                    type="text"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={
                                        errors.email && touched.email ? 'text-input error' : 'text-input'
                                    }
                                />
                                {errors.email && touched.email && (
                                    <div className="input-feedback">{errors.email}</div>
                                )}

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
                                    {this.state.show ? 'Hide' : 'Show'} current form state
                                </button>
                                <DisplayFormikState {...props} display={this.state.show} />
                            </form>
                        );
                    }}
                </Formik>
            </div>
        )
    }
}

export { FormExample }
