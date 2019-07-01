function FormDropdownInputElement(props) {
    return (
        <select
            name={props.elementId}
            value={props.values}
            onChange={props.handleChange}
            onBlur={props.handleBlur}
        >
            <option value="" label={props.label} />
            {displayOptions(props.options)}
        </select>
    )
}

function displayOptions(options) {
    var arrayOfOptions = [];
    for (var i = 0; i < options.length; i++) {
        arrayOfOptions.push(<option value={options[i]} label={options[i]} />);
    }
    return arrayOfOptions;
}
export { FormDropdownInputElement }