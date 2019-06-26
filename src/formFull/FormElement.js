function FormElement(props) {
    return (
        <>
            <label htmlFor={props.elementId} style={{ display: 'block' }}>
                {props.title}
            </label>
            <input
                id={props.elementId}
                placeholder={'Enter your ' + props.title}
                type="text"
                value={props.values}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                className={
                    props.errors && props.touched ? 'text-input error' : 'text-input'
                }
            />
            {props.errors && props.touched && (
                <div className="input-feedback">{props.errors}</div>
            )}
        </>
    )
}

export { FormElement }