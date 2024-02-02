'use client'

import { animated, useSpring } from '@react-spring/three'
import { Rating } from "@mui/material";
import Container from "@mui/material/Container";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Header from '../components/Header';
import { Canvas } from "@react-three/fiber";
import { LogoModel } from '../components/LogoModel';
import React from 'react';

export default function Home() {
  const { rotation } = useSpring({ from: {rotation: 0}, to: {rotation: Math.PI}, loop: true, delay: 1000})
  console.log(rotation);
  return (
    <Container maxWidth="xl">
      <Header />
      <Grid2>
        <Rating />
      </Grid2>
      <div className={'h-[90vh]'}>
        <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 4] }}>
          <ambientLight intensity={3} />
          <pointLight position={[0, 0, 3]} intensity={10} />
          <animated.group rotation-y={rotation}>
            <LogoModel />
          </animated.group>
        </Canvas>
      </div>
    </Container>
  );
}
