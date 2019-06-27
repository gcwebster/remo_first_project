function FormElementTermsAndConditions(props) {
    return (
        <div className="checkboxFormElement">
            <input
                type="checkbox"
                name="terms"
                value="terms"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
            />
            {props.option}
        </div>
    )
}

export { FormElementTermsAndConditions }