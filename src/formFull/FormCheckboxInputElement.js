import { FormElementLabel } from "./FormElementLabel";
import { FormElementError } from "./FormElementError";

function FormCheckboxInputElement(props) {
    return (
        <>
            <FormElementLabel elementId={props.elementId} title={props.title} />
            {displayCheckboxes(props)}
            <FormElementError errors={props.errors} touched={props.touched} />
        </>
    )
}

function displayCheckboxes(props) {

    var checkboxes = [];
    for (var i = 0; i < props.options.length; i++) {
        checkboxes.push(
            <div>
                <input
                    type="checkbox"
                    name={props.options[i]}
                    value={props.options[i]}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                />
                {props.options[i]}
            </div>
        )
    }
    return checkboxes
}

export { FormCheckboxInputElement }