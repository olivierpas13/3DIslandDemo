import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "./Loader";

const Home = () => {
  return (
    <section className="w-full h-screen">
      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader/>} ></Suspense>
      </Canvas>
    </section>
  );
};

export default Home;