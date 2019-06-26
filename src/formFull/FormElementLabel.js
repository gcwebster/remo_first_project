function FormElementLabel(props) {
    return (
        <label htmlFor={props.elementId} style={{ display: 'block' }}>
            {props.title}
        </label>
    )
}

export { FormElementLabel }