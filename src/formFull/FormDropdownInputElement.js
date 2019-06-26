import { FormElementError } from "./FormElementError";
import { FormElementLabel } from "./FormElementLabel";

function FormDropdownInputElement(props) {
    return (
        <>
            <FormElementLabel elementId={props.elementId} title={props.title} />
            <select
                name={props.elementId}
                value={props.values}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                style={{ display: 'block' }}
            >
                <option value="" label={props.label} />
                {displayOptions(props.options)}
            </select>
            <FormElementError errors={props.errors} touched={props.touched} />
        </>
    )
}

function displayOptions(options) {
    var arrayOfOptions = [];
    for (var i = 0; i < options.length; i++) {
        arrayOfOptions.push(<option value={options[i]} label={options[i]} />);
    }
    return arrayOfOptions;
}
export { FormDropdownInputElement }