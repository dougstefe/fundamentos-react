import React from 'react'
export default function WithParam({title, subtitle}){
    return (
        // <React.Fragment>
        <>
            <h2>
                {title}
            </h2>
            <h3>
                {subtitle}
            </h3>
        </>
        // </React.Fragment>
    )
}