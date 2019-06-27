import { FormElementLabel } from './FormElementLabel';
import { FormElementError } from './FormElementError';

function FormRadioInputElement(props) {
    return (
        <>
            <FormElementLabel elementId={props.elementId} title={props.title} />
            {displayRadioButtons(props)}
            <FormElementError errors={props.errors} touched={props.touched} />

        </>
    )
}

function displayRadioButtons(props) {
    var radioButtons = [];
    for (var i = 0; i < props.options.length; i++) {
        radioButtons.push(
            <div>
                <input
                    type="radio"
                    name={props.radioButtonGroup}
                    value={props.options[i]}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                />
                {props.options[i]}
            </div>)
    }
    return radioButtons;
}

export { FormRadioInputElement }