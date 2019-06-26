import { FormElementError } from "./FormElementError";
import { FormElementLabel } from "./FormElementLabel";


function FormTextInputElement(props) {
    return (
        <>
            <FormElementLabel elementId={props.elementId} title={props.title} />

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