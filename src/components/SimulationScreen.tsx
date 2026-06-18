import React from "react"
export default function SimulationScreen() {
    const simStyle: React.CSSProperties = {
        borderWidth: 1, 
        width: '80vw',
        height: '70vh',
        borderStyle: 'solid',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 auto',
        borderColor: 'rgb(134, 162, 185)',
        backgroundColor: 'rgb(58, 104, 145)',
        borderRadius: '4px'
    };
    return (
        <div style={simStyle} />
    )
}