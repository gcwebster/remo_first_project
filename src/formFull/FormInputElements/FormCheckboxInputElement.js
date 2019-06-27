function FormCheckboxInputElement(props) {
    return (
        <div className="checkboxFormElement">
            {displayCheckboxes(props)}
        </div>
    )
}

function displayCheckboxes(props) {
    var checkboxes = [];
    for (var i = 0; i < props.options.length; i++) {
        checkboxes.push(
            <div>
                <input
                    type="checkbox"
                    name={props.options[i]}
                    value={props.options[i]}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                />
                {props.options[i]}
            </div>
        )
    }
    return checkboxes
}

export { FormCheckboxInputElement }