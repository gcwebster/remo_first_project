function FormCheckboxInputElement(props) {
    return (
        <div className="checkboxFormElement">
            {displayCheckboxes(props)}
        </div>
    );
}

function displayCheckboxes(props) {
    var checkboxes = [];
    for (var i = 0; i < props.options.length; i++) {
        /*
         * An error will occur if you don't set the category to be empty on intial values in form
         * This is because it can't search for an element of the category if the category doesn't yet exist
         * e.g. hobbies would only be created once Kayaking (or other) was selected, meaning props.category.[props.options[i]] couldn't find anything
         * Now it can go into the category since it exists (even if empty) and determine that the specific element doesn't exist (returns undefined instead of error)
         */
        var title = props.category + '.' + props.options[i];
        checkboxes.push(
            <div key={`${props.elementId}-${i}`}>
                <input
                    type="checkbox"
                    name={title}
                    value={props.options[i]}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    checked={props.values[props.options[i]] === true}
                />
                {props.options[i]}
            </div>
        );
    }
    return checkboxes;
}

export { FormCheckboxInputElement };
