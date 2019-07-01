function FormRadioInputElement(props) {
    return (
        <div className="radioFormElement">
            {displayRadioButtons(props)}
        </div>
    )
}

function displayRadioButtons(props) {
    var radioButtons = [];
    for (var i = 0; i < props.options.length; i++) {
        radioButtons.push(
            <div>
                <input
                    type="radio"
                    name={props.category}
                    id={props.options[i]}
                    value={props.options[i]}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                />

                <label for={props.options[i]}>
                    {props.options[i]}
                </label>
            </div>)
    }
    return radioButtons;
}

export { FormRadioInputElement }