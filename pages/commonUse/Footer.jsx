import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";

const Footer = () => {
    return (

        <section>

            <footer className="bg-white fontPoppins text-black sm:py-16 py-10">

                <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 sm:gap-8 gap-5 px-6 justify-center">

                    <div className="col-span-12 sm:col-span-3">

                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/01291425-cb6b-470b-4b4b-2c2e1a2c9c00/public" alt="" className="sm:w-1/2 w-3/6" />

                        <p className="sm:pt-6 pt-2 text-sm">Cultivating Plant Care With Plantify. </p>
                        <p className="sm:pt-2 pt-2 text-sm">Plantify Garden Is India Most Trustable Home Garden Organic Fertilizer Shop</p>

                        <div className="flex space-x-4 mt-4">
                            <a href="https://www.facebook.com/PlantifyGardenCare"><FaFacebookSquare size={30} /></a>
                            <a href="https://www.instagram.com/plantifygardencare/"><FaSquareInstagram size={30} /></a>
                            <a href="https://www.youtube.com/@PlantifyGarden"><FaYoutube size={30} /></a>
                        </div>
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                        <h3 className="sm:text-lg text-xl font-semibold mb-4">Useful Links</h3>
                        <ul className="text-sm">
                            <li><a href="https://www.plantifygarden.com/pages/privacy-policy" className="hover:underline">Privacy Policy</a></li>
                            <li><a href="https://www.plantifygarden.com/pages/return-and-refund-policy" className="hover:underline">Refund Policy</a></li>
                            <li><a href="https://www.plantifygarden.com/pages/shipping-policy" className="hover:underline">Shipping Policy</a></li>
                            <li><a href="https://www.plantifygarden.com/pages/terms-and-conditions" className="hover:underline">Terms of Service</a></li>
                            <li><a href="https://www.plantifygarden.com/pages/about-us" className="hover:underline">About Us</a></li>
                            <li><a href="https://www.plantifygarden.com/pages/contact" className="hover:underline">Contact Us</a></li>
                        </ul>
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                        <h3 className="sm:text-lg text-xl font-semibold mb-4">Products</h3>
                        <ul className="text-sm">
                            <li><a href="https://www.plantifygarden.com/products/plantify-plants-food-sticks" className="hover:underline">Sticks</a></li>
                            <li><a href="https://www.plantifygarden.com/products/plantify-organic-growth-booster" className="hover:underline">Liquid</a></li>
                        </ul>
                    </div>

                    <div className="col-span-12 sm:col-span-3">
                        <h3 className="sm:text-lg text-xl font-semibold mb-4">Address</h3>
                        <div className="text-sm">
                            <p>AR Ayurveda Private Limited</p>
                            <p>FF 14, Ujala Avenue, Sarkhej Road, Vishala,</p>
                            <p>Ahmedabad, Gujarat (INDIA) 380055</p>

                            <div className="py-2">
                                <a href="tel:+91 9512334343" >Call us at: +91 9512334343</a>
                            </div>
                            <p>Email: <a href="mailto:plantifygarden1@gmail.com" className="text-blue-800 hover:underline">plantifygarden1@gmail.com</a></p>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto ">
                    <div className="border-t border-gray-600 mt-8 sm:mb-0 mb-8 pt-4 sm:grid grid-cols-2 items-center">
                        <div className="text-center sm:text-md text-sm text-gray-800">
                            © 2024, Plantify Garden All Rights Reserved
                        </div>
                        <div className="flex justify-center mt-4 space-x-4">
                            {/* Payment Icons */}
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/eecd9cfe-706a-4d7f-0556-a9f504eb7d00/public" alt="Google Pay" className="sm:w-1/3 w-3/5 mx-auto px-5" />

                        </div>
                    </div>
                </div>
            </footer>
        </section >
    )
}
export default Footer;

