import { FormElementError } from "./FormElementError";

function FormTextInputElement(props) {
    return (
        <>
            <label htmlFor={props.elementId} style={{ display: 'block' }}>
                {props.title}
            </label>
            <input
                id={props.elementId}
                type="text"
                value={props.values}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                className={
                    props.errors && props.touched ? 'text-input error' : 'text-input'
                }
            />
            <FormElementError errors={props.errors} touched={props.touched} />
        </>
    )
}

export { FormTextInputElement }