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
        var title = props.category + "." + props.options[i];
        checkboxes.push(
            <div>
                <input
                    type="checkbox"
                    name={title}
                    value={props.options[i]}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    checked={props.values[props.options[i]] == true ? true : false}
                />
                {props.options[i]}
            </div>
        )
    }
    return checkboxes
}

export { FormCheckboxInputElement }