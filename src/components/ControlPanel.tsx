import React from "react";
import { useSimState } from "../types/stores";

export default function ControlPanel() {
    const launchAngle = useSimState((state) => state.launchAngle);
    const setLaunchAngle = useSimState((state) => state.setLaunchAngle);
    const minLaunchAngle = 0;
    const maxLaunchAngle = 160;

    const dryMass = useSimState((state) => state.rocket.dryMass);
    const setDryMass = useSimState((state) => state.setDryMass);
    const minDryMass = 10;
    const maxDryMass = 10000;

    const burnRate = useSimState((state) => state.rocket.burnRate);
    const setBurnRate = useSimState((state) => state.setBurnRate);
    const minBurnRate = 1;
    const maxBurnRate = 500;

    const airDensity = useSimState((state) => state.environment.surfaceAirDensity);
    const setAirDensity = useSimState((state) => state.setAirDensity);
    const minAirDensity = 0;
    const maxAirDensity = 100;

    const drag = useSimState((state) => state.rocket.dragCoefficient);
    const updateDrag = useSimState((state) => state.updateDrag);
    const minDrag = 0;
    const maxDrag = 5;

    const thrust = useSimState((state) => state.rocket.thrustForce);
    const updateThrust = useSimState((state) => state.updateThrust);
    const minThrust = 0;
    const maxThrust = 2000000;

    const fuelMass = useSimState((state) => state.rocket.fuelMass);
    const updateFuel = useSimState((state) => state.updateFuel);
    const minFuelMass = 0;
    const maxFuelMass = 50000;

    const gravity = useSimState((state) => state.environment.gravity);
    const updateGravity = useSimState((state) => state.updateGravity);
    const minGravity = 0;
    const maxGravity = 50;

    const panelStyle: React.CSSProperties = {
        width: '80%',
        padding: '20px',
        backgroundColor: '#353535',
        color: '#ffffff',
        fontFamily: 'monospace',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        justifyContent: 'center',
        margin: '0 auto',
        alignItems: 'center',
        marginTop: '20px'
    };

    const controlGroupStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        flex: 1,
        backgroundColor: '#7070703d',
        padding: '4px',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
    };

    const inputStyle: React.CSSProperties = {
        display: 'flex',
        justifyContent: 'space-between',
        gap: '8px',
    }

    const labelStyle: React.CSSProperties = {
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '14px',
    };

    const numberFieldStyle: React.CSSProperties = {
        width: '30%',
        borderRadius: '6px',
        backgroundColor: '#888888a6',
        color: '#ffffffe3',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
        textAlign: 'left',
        paddingLeft: '4px',
        boxSizing: 'border-box'
    }

    const sliderStyle: React.CSSProperties = {
        width: '100%',
        accentColor: '#5d88fde3',
        cursor: 'pointer',
    };

    return (
        <div style={panelStyle}>
            <style>
                {`
                    .no-spinners::-webkit-outer-spin-button,
                    .no-spinners::-webkit-inner-spin-button {
                        -webkit-appearance: none;
                        margin: 0;
                    }
                    .no-spinners[type=number] {
                        -moz-appearance: textfield;
                    }
                `}
            </style>

            <h3 style={{ margin: '0 0 1px 0', width: '100%', textAlign: 'center' }}>
                Control Panel
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '30px', width: '100%' }}>
                <div style={controlGroupStyle}>
                    <div style={labelStyle}>
                        <span>Launch Angle</span>
                        <span style={{ color: '#00ff00' }}>{launchAngle}°</span>
                    </div>
                    <div style={inputStyle}>
                        <input
                            type="range"
                            min={minLaunchAngle}
                            max={maxLaunchAngle}
                            defaultValue="90"
                            step="1"
                            value={launchAngle}
                            style={sliderStyle}
                            onChange={(e) => setLaunchAngle(Number(e.target.value))}
                        />
                        <input
                            type="number"
                            className="no-spinners"
                            min={minLaunchAngle}
                            max={maxLaunchAngle}
                            value={launchAngle}
                            style={numberFieldStyle}
                            onChange={(e) => {
                                const rawVal = e.target.value;
                                if (rawVal === "") {
                                    setLaunchAngle(0 as any);
                                    e.target.value = "";
                                    return;
                                }
                                let val = Number(rawVal);
                                if (val > maxLaunchAngle) val = maxLaunchAngle;
                                if (val < minLaunchAngle) val = minLaunchAngle;
                                e.target.value = val.toString();
                                setLaunchAngle(val);
                            }}
                        />
                    </div>
                </div>
                <div style={controlGroupStyle}>
                    <div style={labelStyle}>
                        <span>Fuel Mass</span>
                        <span style={{ color: '#00ff00' }}>{fuelMass} kg</span>
                    </div>
                    <div style={inputStyle}>
                        <input
                            type="range"
                            min={minFuelMass}
                            max={maxFuelMass}
                            step="10"
                            value={fuelMass}
                            style={sliderStyle}
                            onChange={(e) => updateFuel(Number(e.target.value))}
                        />
                        <input
                            type="number"
                            className="no-spinners"
                            min={minFuelMass}
                            max={maxFuelMass}
                            value={fuelMass}
                            style={numberFieldStyle}
                            onChange={(e) => {
                                const rawVal = e.target.value;
                                if (rawVal === "") {
                                    updateFuel(0 as any);
                                    e.target.value = "";
                                    return;
                                }
                                let val = Number(rawVal);
                                if (val > maxFuelMass) val = maxFuelMass;
                                if (val < minFuelMass) val = minFuelMass;
                                e.target.value = val.toString();
                                updateFuel(val);
                            }}
                        />
                    </div>
                </div>
                <div style={controlGroupStyle}>
                    <div style={labelStyle}>
                        <span>Gravity</span>
                        <span style={{ color: '#00ff00' }}>{gravity} m/s^2</span>
                    </div>
                    <div style={inputStyle}>
                        <input
                            type="range"
                            min={minGravity}
                            max={maxGravity}
                            step="0.1"
                            defaultValue="9.8"
                            value={gravity}
                            style={sliderStyle}
                            onChange={(e) => updateGravity(Number(e.target.value))}
                        />
                        <input
                            type="number"
                            className="no-spinners"
                            min={minGravity}
                            max={maxGravity}
                            value={gravity}
                            style={numberFieldStyle}
                            onChange={(e) => {
                                const rawVal = e.target.value;
                                if (rawVal === "") {
                                    updateGravity(0 as any);
                                    e.target.value = "";
                                    return;
                                }
                                let val = Number(rawVal);
                                if (val > maxGravity) val = maxGravity;
                                if (val < minGravity) val = minGravity;
                                e.target.value = val.toString();
                                updateGravity(val);
                            }}
                        />
                    </div>
                </div>
                <div style={controlGroupStyle}>
                    <div style={labelStyle}>
                        <span>Thrust</span>
                        <span style={{ color: '#00ff00' }}>{thrust} N</span>
                    </div>
                    <div style={inputStyle}>
                        <input
                            type="range"
                            min={minThrust}
                            max={maxThrust}
                            step="1000"
                            value={thrust}
                            style={sliderStyle}
                            onChange={(e) => updateThrust(Number(e.target.value))}
                        />
                        <input
                            type="number"
                            className="no-spinners"
                            min={minThrust}
                            max={maxThrust}
                            value={thrust}
                            style={numberFieldStyle}
                            onChange={(e) => {
                                const rawVal = e.target.value;
                                if (rawVal === "") {
                                    updateThrust(0 as any);
                                    e.target.value = "";
                                    return;
                                }
                                let val = Number(rawVal);
                                if (val > maxThrust) val = maxThrust;
                                if (val < minThrust) val = minThrust;
                                e.target.value = val.toString();
                                updateThrust(val);
                            }}
                        />
                    </div>
                </div>

                <div style={controlGroupStyle}>
                    <div style={labelStyle}>
                        <span>Drag</span>
                        <span style={{ color: '#00ff00' }}>{drag}</span>
                    </div>
                    <div style={inputStyle}>
                        <input
                            type="range"
                            min={minDrag}
                            max={maxDrag}
                            step="0.1"
                            value={drag}
                            style={sliderStyle}
                            onChange={(e) => updateDrag(Number(e.target.value))}
                        />
                        <input
                            type="number"
                            className="no-spinners"
                            min={minDrag}
                            max={maxDrag}
                            value={drag}
                            style={numberFieldStyle}
                            onChange={(e) => {
                                const rawVal = e.target.value;
                                if (rawVal === "") {
                                    updateDrag(0 as any);
                                    e.target.value = "";
                                    return;
                                }
                                let val = Number(rawVal);
                                if (val > maxDrag) val = maxDrag;
                                if (val < minDrag) val = minDrag;
                                e.target.value = val.toString();
                                updateDrag(val);
                            }}
                        />
                    </div>
                </div>
                <div style={controlGroupStyle}>
                    <div style={labelStyle}>
                        <span>Dry Mass</span>
                        <span style={{ color: '#00ff00' }}>{dryMass} kg</span>
                    </div>
                    <div style={inputStyle}>
                        <input
                            type="range"
                            min={minDryMass}
                            max={maxDryMass}
                            step="10"
                            value={dryMass}
                            style={sliderStyle}
                            onChange={(e) => setDryMass(Number(e.target.value))}
                        />
                        <input
                            type="number"
                            className="no-spinners"
                            min={minDryMass}
                            max={maxDryMass}
                            value={dryMass}
                            style={numberFieldStyle}
                            onChange={(e) => {
                                const rawVal = e.target.value;
                                if (rawVal === "") {
                                    setDryMass(0 as any);
                                    e.target.value = "";
                                    return;
                                }
                                let val = Number(rawVal);
                                if (val > maxDryMass) val = maxDryMass;
                                if (val < minDryMass) val = minDryMass;
                                e.target.value = val.toString();
                                setDryMass(val);
                            }}
                        />
                    </div>
                </div>
                <div style={controlGroupStyle}>
                    <div style={labelStyle}>
                        <span>Burn Rate</span>
                        <span style={{ color: '#00ff00' }}>{burnRate} kg/s</span>
                    </div>
                    <div style={inputStyle}>
                        <input
                            type="range"
                            min={minBurnRate}
                            max={maxBurnRate}
                            step="1"
                            value={burnRate}
                            style={sliderStyle}
                            onChange={(e) => setBurnRate(Number(e.target.value))}
                        />
                        <input
                            type="number"
                            className="no-spinners"
                            min={minBurnRate}
                            max={maxBurnRate}
                            value={burnRate}
                            style={numberFieldStyle}
                            onChange={(e) => {
                                const rawVal = e.target.value;
                                if (rawVal === "") {
                                    setBurnRate(0 as any);
                                    e.target.value = "";
                                    return;
                                }
                                let val = Number(rawVal);
                                if (val > maxBurnRate) val = maxBurnRate;
                                if (val < minBurnRate) val = minBurnRate;
                                e.target.value = val.toString();
                                setBurnRate(val);
                            }}
                        />
                    </div>
                </div>
                <div style={controlGroupStyle}>
                    <div style={labelStyle}>
                        <span>Surface Air Density</span>
                        <span style={{ color: '#00ff00' }}>{airDensity} kg/m^3</span>
                    </div>
                    <div style={inputStyle}>
                        <input
                            type="range"
                            min={minAirDensity}
                            max={maxAirDensity}
                            step="0.1"
                            defaultValue="1.225"
                            value={airDensity}
                            style={sliderStyle}
                            onChange={(e) => setAirDensity(Number(e.target.value))}
                        />
                        <input
                            type="number"
                            className="no-spinners"
                            min={minAirDensity}
                            max={maxAirDensity}
                            value={airDensity}
                            style={numberFieldStyle}
                            onChange={(e) => {
                                const rawVal = e.target.value;
                                if (rawVal === "") {
                                    setAirDensity(0 as any);
                                    e.target.value = "";
                                    return;
                                }
                                let val = Number(rawVal);
                                if (val > maxAirDensity) val = maxAirDensity;
                                if (val < minAirDensity) val = minAirDensity;
                                e.target.value = val.toString();
                                setAirDensity(val);
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}