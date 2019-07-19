import { FormElementLabel } from './FormElementLabel';
import { FormElementError } from './FormElementError';

import { FormCheckboxInputElement } from './FormInputElements/FormCheckboxInputElement'
import { FormRadioInputElement } from './FormInputElements/FormRadioInputElement';
import { FormDropdownInputElement } from './FormInputElements/FormDropdownInputElement';
import { FormTextInputElement } from './FormInputElements/FormTextInputElement';
import { FormNumericalInputElement } from './FormInputElements/FormNumericalInputElement';
import { FormElementTermsAndConditions } from './FormInputElements/FormElementTermsAndConditions';

function FormElement(props) {
    return (
        <div className="formElement">
            <FormElementLabel elementId={props.elementId} title={props.title} />
            {displayCorrectElement(props)}
            <FormElementError errors={props.errors} touched={props.touched} />
        </div>
    )
}

function displayCorrectElement(props) {
    switch (props.type) {
    case 'checkbox':
        return (<FormCheckboxInputElement {...props} />);
    case 'radio':
        return (<FormRadioInputElement {...props} />);
    case 'dropdown':
        return (<FormDropdownInputElement {...props} />);
    case 'text':
        return (<FormTextInputElement {...props} />);
    case 'number':
        return (<FormNumericalInputElement {...props} />);
    case 'terms':
        return (<FormElementTermsAndConditions {...props} />);
    }
}

export { FormElement }