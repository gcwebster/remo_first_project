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
            <div key={`${props.elementId}-${i}`}>
                <input
                    type="radio"
                    name={props.category}
                    id={props.options[i]}
                    value={props.options[i]}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    checked={props.values === props.options[i] ? true : false}
                />

                <label for={props.options[i]}>
                    {props.options[i]}
                </label>
            </div>)
    }
    return radioButtons;
}

export { FormRadioInputElement }