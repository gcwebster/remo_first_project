function FormDropdownInputElement(props) {
    return (
        <select
            name={props.elementId}
            value={props.values}
            onChange={props.handleChange}
            onBlur={props.handleBlur}
        >
            <option value="" label={props.label} />
            {displayOptions(props.options, props.elementId)}
        </select>
    )
}

function displayOptions(options, elementId) {
    var arrayOfOptions = [];
    for (var i = 0; i < options.length; i++) {
        arrayOfOptions.push(
            <option
                key={`${elementId}-${i}`}
                value={options[i]}
                label={options[i]} />
        );
    }
    return arrayOfOptions;
}
export { FormDropdownInputElement }