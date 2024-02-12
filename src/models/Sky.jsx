import { useGLTF } from '@react-three/drei';
import skyScene from '../assets/3d/sky.glb'
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const Sky = ({isRotating}) => {

    const sky = useGLTF(skyScene);
    const skyRef = useRef();
    useFrame((_, delta)=>{
        if(isRotating){
            skyRef.current.rotation.y += 0.25*delta
        }
    })
    return (
        <mesh>
            <primitive object={sky.scene} ref={skyRef} />            
        </mesh>
    );
}
 
export default Sky;