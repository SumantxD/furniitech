import { Suspense } from "react";
import React from "react";

const { OrbitControls, PerspectiveCamera, useGLTF } = require("@react-three/drei")
const { Canvas, useFrame } = require("@react-three/fiber")

function Cube(){
    return(
        <group>
            <mesh>
                <boxGeometry args={[3,3,3]}/>
                <meshStandardMaterial color={"blue"}/>
            </mesh>
        </group>
    )
}

function Model(props) {

    const meshRef = React.createRef();

    useFrame(() => {
        if(!meshRef.current){
            return;
        }
        meshRef.current.rotation.y += 0.01;
    })

  const { nodes, materials } = useGLTF("hanna_armchair.glb");
  return (
    <group {...props} dispose={null} ref = {meshRef}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={5} position={[0,-3,0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Material-Imbottito"].geometry}
            material={materials.Imbottito}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Material-Gommini"].geometry}
            material={materials.Gommini}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Material-Legno"].geometry}
            material={materials.Legno}
          />
        </group>
      </group>
    </group>
  );
}

const Tdc = () =>{

    return (
        <div className=" w-1/2 h-1/2 relative flex bg-slate-500 mx-96 mt-4 border-2 border-gray-800">
            <div className=" relative m-5 bg-lime-600 w-1/1 h-80 border-2 rounded-full border-slate-900">
                <Canvas>
                    <PerspectiveCamera makeDefault position={[0,0,10]}/>
                    <OrbitControls/>
                    <ambientLight/>
                    <pointLight position={[10,10,10]}/>
                    {/* <Cube/> */}
                    <Suspense fallback = {null}>
                        <Model/>
                    </Suspense>
                </Canvas>
           
            </div>
            <div className=" w-[300px] h-10 bg-orange-500 relative border-2 border-cyan-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex unde accusamus repudiandae laborum. Alias odio debitis delectus iste assumenda ut quos non voluptate provident ab, voluptates exercitationem! Repudiandae eum commodi ut quis sequi adipisci dolore sit, fugit nulla, fuga libero.
            </div>
        </div>
    )

}

export default Tdc;