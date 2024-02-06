'use client'

import { animated, useSpring } from '@react-spring/three'
import { Rating } from "@mui/material";
import Container from "@mui/material/Container";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Header from '../components/Header';
import { Canvas } from "@react-three/fiber";
import { LogoModel } from '../components/LogoModel';
import React from 'react';
import { OrbitControls } from '@react-three/drei';

export default function Home() {
  const { rotation } = useSpring({ from: {rotation: 1}, to: {rotation: Math.PI * 2}, loop: true, delay: 1000})

  return (
    <Container maxWidth="xl">
      <Header />
      <Grid2>
        <Rating />
      </Grid2>
      <div className={'h-[90vh]'}>
        <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 4] }}>
          <animated.group rotation-y={rotation}>
            <LogoModel />
          </animated.group>
          <directionalLight position={[0, 0, 3]} />
          <ambientLight intensity={3} />
          <pointLight position={[0, 0, 3]} intensity={20} />
        </Canvas>
      </div>
    </Container>
  );
}
