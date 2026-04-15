'use client'

import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useMemo, useRef, useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export function Tennis(props) {
  const { scene, animations } = useGLTF('/tennista_palla.glb')
  const { actions } = useAnimations(animations, scene)

  useEffect(() => {
    console.log(actions)
    actions.Scene?.play()
  }, [actions])

  return <primitive object={scene} {...props} />
}
