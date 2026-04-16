'use client'

import { useGLTF, useAnimations } from '@react-three/drei'
// import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useMemo, useRef, useState, useEffect } from 'react'

export function Tennis(props) {
  const { scene, animations, materials } = useGLTF('/tennista_palla.glb')
  const { actions } = useAnimations(animations, scene)

  useEffect(() => {
    actions.Scene?.play()
  }, [actions])

  useEffect(() => {
    for (const [key, value] of Object.entries(materials)) {
      console.log(key + ':')
      console.log(value)
      //value.side = THREE.TwoPassDoubleSide

      if (key == 'tennista_occhiblu') {
        value.depthWrite = true // Bug in model that makes the skin all weird
      }
      if (key == 'M_255_255_102_211' || key == 'M_255_255_255_255') {
        value.visible = false // Hide tennis ball
      }
    }
  }, [materials])

  return <primitive object={scene} {...props} />
}
