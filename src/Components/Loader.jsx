import { Html } from "@react-three/drei"
const Loader = () => {
    return (
        <Html>
            <div className="flex items-center justify-center ">
                <div className="w-20 h-20 border-2  border-purple-200 border-t-purple-700 rounded-full animate-spin"></div>
            </div>
        </Html>
    )
}

export default Loader