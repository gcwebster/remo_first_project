function FormTextInputElement(props) {
    return (
        <>
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
        </>
    )
}

export { FormTextInputElement }