function FormNumericalInputElement(props) {
    return (
        <>
            <input
                id={props.elementId}
                type="number"
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

export { FormNumericalInputElement }