function FormRadioInputElement(props) {
    return (
        <>
            {displayRadioButtons(props)}
        </>
    )
}

function displayRadioButtons(props) {
    var radioButtons = [];
    for (var i = 0; i < props.options.length; i++) {
        radioButtons.push(
            <div>
                <input
                    type="radio"
                    name={props.radioButtonGroup}
                    value={props.options[i]}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                />
                {props.options[i]}
            </div>)
    }
    return radioButtons;
}

export { FormRadioInputElement }