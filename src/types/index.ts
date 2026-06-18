export interface Vector2D {
    x: number;
    y: number;
}

export interface EnvironmentParams {
    // planetRadius: number;      
    surfaceAirDensity: number;  
    gravity: number;
}

export interface Stage {
    //id: string;
    dryMass: number;
    fuelMass: number;
    thrustForce: number;
    burnRate: number;
    dragCoefficient: number;
}

export interface Telemetry {
    position: Vector2D;
    velocity: Vector2D;
    acceleration: Vector2D;
    altitude: number;
    totalVelocity: number;
    timeElapsed: number;
}

export interface SimState {
    launchAngle: number;
    rocket: Stage;
    environment: EnvironmentParams;
    // stages: Stage[];
    // currentStageIndex: number;  

    telemetry: Telemetry;

    setLaunchAngle: (angle: number) => void;
    setDryMass: (mass: number) => void;
    setBurnRate: (rate: number) => void;
    setAirDensity: (density: number) => void;
    updateDrag: (drag: number) => void;
    updateThrust: (thrust: number) => void;
    updateTelemetry: (newTelemetry: Telemetry) => void;
    updateGravity: (newGravity: number) => void;
    updateFuel: (newFuelMass: number) => void;
}