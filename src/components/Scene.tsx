"use client"

import { Canvas } from "@react-three/fiber"
import { Bubbles } from "./ui/Bubbles"

const Scene = () => {
    return (
        <div >
            <Canvas camera={{ position: [0, 0, 5] }}>
                <ambientLight intensity={1.5} />
                <pointLight position={[5, 5, 5]} intensity={2} />
                <Bubbles bubbleSize={0.15} />
            </Canvas>
        </div>
    )
}

export default Scene