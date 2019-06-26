import { FormElementError } from "./FormElementError";

function FormDropdownInputElement(props) {
    return (
        <>
            <select
                name={props.elementId}
                value={props.values}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                style={{ display: 'block' }}
            >
                <option value="" label="Select a colour" />
                <option value="red" label="red" />
                <option value="blue" label="blue" />
                <option value="green" label="green" />
                <option value="3" label="3" />
            </select>
            <FormElementError errors={props.errors} touched={props.touched} />
        </>
    )
}

export { FormDropdownInputElement }