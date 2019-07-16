function FormElementTermsAndConditions(props) {
    return (
        <div className="checkboxFormElement">
            <input
                type="checkbox"
                name="terms"
                value="terms"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                checked={props.values === true}
            />
            {props.option}
        </div>
    )
}

export { FormElementTermsAndConditions }