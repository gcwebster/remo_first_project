function FormElementError(props) {
    return (
        <>
            {props.errors && props.touched && (
                <div className="input-feedback">
                    {props.errors}
                </div>
            )}
        </>
    )
}

export { FormElementError }