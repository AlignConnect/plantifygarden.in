import { ImSpinner3 } from "react-icons/im";

const FormLoader = () => {
    return (

        <section className='z-10 h-[100vh] w-[100vw] flex items-center justify-center fixed top-0 left-0 bg-black bg-opacity-75'>

            <div className="text-center bg-white p-3 rounded-xl">


                <div className="py-4 w-full animation-rotate-data"><ImSpinner3 className="text-5xl mx-auto text-red-600" /></div>


                <h2 className="font-bold text-black text-2xl">कृपया प्रतिक्षा करें !</h2>
                <p className="text-lg text-black">आपको प्रोडक्ट पेज पर स्थानांतरित किया जा रहा है। </p>
            </div>

        </section>

    )
}

export default FormLoader;