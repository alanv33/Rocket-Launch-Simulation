import { create } from 'zustand';
import { type SimState } from '.';

export const useSimState = create<SimState>((set) => ({
    launchAngle: 90,
    environment: {
        gravity: 9.8,
        surfaceAirDensity: 1.225,
    },
    rocket: {
        dryMass: 0,
        fuelMass: 0,
        thrustForce: 0,
        burnRate: 0,
        dragCoefficient: 0,
    },
    telemetry: {
        position: { x: 0, y: 0 },
        velocity: { x: 0, y: 0 },
        acceleration: { x: 0, y: 0 },
        altitude: 0,
        totalVelocity: 0,
        timeElapsed: 0,
    },

    setLaunchAngle: (newAngle) => set({ launchAngle: newAngle }),
    setDryMass: (newMass: number) => set((stage) => ({
        rocket: {
            ...stage.rocket,
            dryMass: newMass
        }
    })),
    setBurnRate: (newRate: number) => set((stage) => ({
        rocket: {
            ...stage.rocket,
            burnRate: newRate
        }
    })),
    setAirDensity: (newDensity: number) =>
        set((stage) => ({
            environment: {
                ...stage.environment,
                surfaceAirDensity: newDensity
            }
        })),
    updateDrag: (newDrag: number) => set((stage) => ({
        rocket: {
            ...stage.rocket,
            dragCoefficient: newDrag
        }
    })),
    updateThrust: (newThrust: number) => set((stage) => ({
        rocket: {
            ...stage.rocket,
            thrustForce: newThrust
        }
    })),
    updateTelemetry: (newTelemetry) => set({ telemetry: newTelemetry }),
    updateGravity: (newGravity: number) =>
        set((stage) => ({
            environment: {
                ...stage.environment,
                gravity: newGravity
            }
        })),
    updateFuel: (newFuelMass: number) =>
        set((stage) => ({
            rocket: {
                ...stage.rocket,
                fuelMass: newFuelMass
            }
        }))
}))
