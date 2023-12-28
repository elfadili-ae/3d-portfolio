import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../Components/Loader'
import Platform from '../models/platform'

const Home = () => {
    return (
        <section className='w-full h-screen relative'>
            <Canvas
                className='w-full h-screen bg-transparent'
                camera={{ near: 0.1, far: 1000 }}>
                <Suspense fallback={<Loader />}
                >
                    <directionalLight />
                    <ambientLight />
                    <pointLight />
                    <spotLight />
                    <hemisphereLight />
                    <Platform />
                </Suspense>
            </Canvas>
        </section>
    )
}

export default Home