'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Particles({ count = 2000, mouse }) {
  const points = useRef()
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 15
      positions[i * 3 + 1] = (Math.random() - 0.5) * 15
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15
    }
    return positions
  }, [count])

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    
    points.current.rotation.y = time * 0.05
    points.current.rotation.x = time * 0.03

    // Mouse interaction
    if (mouse.current) {
      points.current.rotation.x += (mouse.current.y * 0.01 - points.current.rotation.x) * 0.1
      points.current.rotation.y += (mouse.current.x * 0.01 - points.current.rotation.y) * 0.1
    }

    // Breathing animation
    points.current.scale.x = points.current.scale.y = points.current.scale.z = 
      1 + Math.sin(time * 0.5) * 0.1
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#4F46E5"
        sizeAttenuation
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

export default function ParticleBackground() {
  const mouse = useRef({ x: 0, y: 0 })

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    mouse.current = {
      x: ((event.clientX - rect.left) / rect.width) * 2 - 1,
      y: -((event.clientY - rect.top) / rect.height) * 2 + 1
    }
  }

  return (
    <div 
      className="fixed top-0 left-0 w-full h-full z-0 opacity-40"
      onMouseMove={handleMouseMove}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <Particles mouse={mouse} />
      </Canvas>
    </div>
  )
}
