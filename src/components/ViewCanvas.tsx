"use client"
import { Canvas } from '@react-three/fiber'
import { Environment, Float } from '@react-three/drei'
import FloatingCan from './ui/FloatingCan'

const ViewCanvas = () => {
    return (
        <Canvas
            style={{
                position: 'fixed',
                top: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                overflow: 'hidden',
                pointerEvents: 'none',
                zIndex: 30,
            }}
            shadows
            dpr={[1, 1.5]}
            gl={{ antialias: true }}
            camera={{
                fov: 30,
            }}
        >
            {/* <FloatingCan />             */}npm 
            <Environment files='./hdrs/lobby.hdr' environmentIntensity={1.5} />
        </Canvas>
    )
}

export default ViewCanvas
