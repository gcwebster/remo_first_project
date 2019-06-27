function FormElementLabel(props) {
    return (
        <label htmlFor={props.elementId} className="formElementLabel">
            {props.title}
        </label>
    )
}

export { FormElementLabel }