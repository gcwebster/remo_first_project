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
                    name={props.checkboxButtonGroup}
                    value={props.options[i]}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    checked={props.options[i] == "Polo" || props.options[i] == false ? false : true}
                />
                {props.options[i]}
                <h1>values: {props.values}</h1>
                {console.log(props.values)}
            </div>
        )
    }
    return checkboxes
}

export { FormCheckboxInputElement }