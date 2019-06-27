import { FormElementLabel } from "./FormElementLabel";
import { FormElementError } from "./FormElementError";

import { FormCheckboxInputElement } from './FormCheckboxInputElement'
import { FormRadioInputElement } from "./FormRadioInputElement";
import { FormDropdownInputElement } from "./FormDropdownInputElement";
import { FormTextInputElement } from "./FormTextInputElement";

function FormElement(props) {
    return (
        <>
            <FormElementLabel elementId={props.elementId} title={props.title} />
            {displayCorrectElement(props)}
            <FormElementError errors={props.errors} touched={props.touched} />
        </>

    )
}

function displayCorrectElement(props) {
    switch (props.type) {
        case "checkbox":
            return (<FormCheckboxInputElement {...props} />);
        case "radio":
            return (<FormRadioInputElement {...props} />);
        case "dropdown":
            return (<FormDropdownInputElement {...props} />);
        case "text":
            return (<FormTextInputElement {...props} />);
    }
}

export { FormElement }