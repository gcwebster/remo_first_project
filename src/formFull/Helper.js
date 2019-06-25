import React from 'react';

export const DisplayFormikState = props =>
    <div className={`formikDisplayProps + ${props.display ? "" : "hidden"}`}>
        <h3 style={{ fontFamily: 'monospace' }}>Formik props:</h3>
        <pre
            style={{
                background: '#f6f8fa',
                fontSize: '1.2rem',
                padding: '.5rem',
            }}
        >
            <strong>props</strong> ={' '}
            {JSON.stringify(props, null, 2)}
        </pre>
    </div>;
