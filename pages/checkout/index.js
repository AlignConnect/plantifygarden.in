import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  useCreateOrderMutation,
  useCreateRzyOrderMutation,
  useFetchProductsQuery,
  useVerifyPaymentMutation,
} from "../../redux/services/products";
import { resolveRTKError } from "../../redux/rtkQuery";
import dynamic from "next/dynamic";
import Script from "next/script";
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const YoutubeFrame = dynamic(() => import('./components/YoutubeFrame'), {
  loading: () => <p>load</p>
});


const Page = () => {
  const {
    data: products,
    error,
    isLoading,
  } = useFetchProductsQuery({
    id: "9386455630116",
  });
  
  const [createOrder, { isLoading: isSubmitting }] = useCreateOrderMutation();
  const [createRzyOrder, { isLoading: isRzySubmitting }] =
    useCreateRzyOrderMutation();

  const [verifyPayment, { isLoading: isVerifyPayment }] =
    useVerifyPaymentMutation();

  const [selectProducts, setSelectProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [subtotal, setSubtotal] = useState(0);
  const discount = 10;

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    ip: "",
    phone: "",
    address: "",
    zipcode: "",
    country: "",
    state: "",
    city: "",
    tags: "plantifygarden-in",
    payment_status: "Pending",
    delivery_method: "online",
    variant_id: 0,
    amount: 0,
    discount_amount: 0,
  });


  const images = [
    "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/cc0f3a96-ef4e-4d78-b7f7-4837c96b4000/public",
    "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/abfdc507-8b95-40fa-83e0-08b38e0bf700/public",
    "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/63feb4a4-d103-453c-7238-668927b13400/public",
    "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/5cd232c0-4969-4f09-40a5-e10712c40100/public"
  ]

  const PincodeValidation = async (pincodevalue) => {
    if (pincodevalue.length === 6) {
      const url =
        "https://api.postalpincode.in/pincode/" + Number(pincodevalue);
      const pinCode = await fetch(url)
        .then((v) => v)
        .then((response) => response.json())
        .catch((err) => err);
      if (pinCode && pinCode[0] && pinCode[0].Status === "Success") {
        return setFormData((prevState) => ({
          ...prevState,
          state: pinCode ? pinCode[0]?.PostOffice[0]?.State : "",
          city: pinCode ? pinCode[0]?.PostOffice[0]?.District : "",
          country: pinCode ? pinCode[0]?.PostOffice[0]?.Country : "",
        }));
      } else {
        return setFormData((prevState) => ({
          ...prevState,
        }));
      }
    }
  };

  useEffect(() => {
    if (formData.zipcode.length === 6) {
      PincodeValidation(formData.zipcode);
    }
  }, [formData.zipcode]);

  const [formStatus, setFormStatus] = useState(null);

  useEffect(() => {
    if (products) {
      setFormData((prevState) => ({
        ...prevState,
        variant_id: products.variants[0]?.id || "",
      }));

      setSelectProducts(products.variants[0]);
    }
  }, [products]);

  useEffect(() => {
    if (error) {
      return toast.error(resolveRTKError(error));
    }
  }, [error]);

  useEffect(() => {
    const calculatedSubtotal = parseInt(selectProducts?.price) * quantity;
    setSubtotal(calculatedSubtotal);

    let calculatedTotal = calculatedSubtotal;
    if (formData.delivery_method === "online") {

      const d_amount = (calculatedSubtotal * discount) / 100;

      setFormData((prevState) => ({
        ...prevState,
        discount_amount: d_amount,
      }));

      calculatedTotal = calculatedSubtotal - d_amount;
    } else {

      setFormData((prevState) => ({
        ...prevState,
        discount_amount: 0,
      }));
    }

    setFormData((prevState) => ({
      ...prevState,
      amount: calculatedTotal,
    }));
  }, [formData.delivery_method, quantity, selectProducts?.price]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validate = () => {
    let errorMsg = "";
    const requiredFields = [
      "first_name",
      "last_name",
      "email",
      "phone",
      "address",
      "zipcode",
      "country",
      "state",
      "city",
      "payment_status",
      "variant_id",
      "delivery_method",
      "amount",
      "discount_amount",
    ];

    for (const field of requiredFields) {
      const value = formData[field];

      if (
        value === undefined ||
        value === null ||
        (typeof value === 'string' && value.trim() === "") ||
        (typeof value === 'number' && isNaN(value))
      ) {
        errorMsg = `${field} is required`;
        break;
      }
    }


    if (!errorMsg && !/\S+@\S+\.\S+/.test(formData.email)) {
      errorMsg = "Invalid email address";
    } else if (!errorMsg && !/^[6789]\d{9}$/.test(formData.phone)) {
      errorMsg = "Phone number must start with 6, 7, 8, or 9 and be 10 digits";
    } else if (!errorMsg && !/^\d{6}$/.test(formData.zipcode)) {
      errorMsg = "zipcode must be 6 digits";
    }

    if (errorMsg) {
      toast.error(errorMsg);
    }

    return !errorMsg;
  };

  const createorderhandle = async (paymentStatus) => {
    try {

      let checkIp = await axios.get('https://api.ipify.org?format=json').then(response => {
        return response.data.ip
      }).catch(error => console.log(error))

     
      const response = await createOrder({
        ...formData,
        quantity,
        tags: "plantifygarden-in",
        product_price: selectProducts?.price,
        payment_status: paymentStatus,
        ip: checkIp ? checkIp : ''
        
      }).unwrap();
      
     
      if (window.conversion_code) {
       
        window.gtag('event', 'conversion', {
          'send_to': window.conversion_code,
          'event_callback': () => {
            return

          }
        });
      }

      setFormStatus(`Payment ${paymentStatus}! Order placed successfully!`);
      toast.success(`Payment ${paymentStatus}! Order placed successfully!`);
      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        address: "",
        zipcode: "",
        country: "",
        state: "",
        city: "",
        payment_status: "Pending",
        delivery_method: "online",
        variant_id: products.variants[0]?.id || "",

      });
       setQuantity(1);

       return window.location.href = `${process.env.SHOPIFY_URL}/${response?.response?.order?.id}/orders/${response?.response?.order?.token}`


    } catch (error) {
      setFormStatus("Failed to submit form. Please try again.");
      return toast.error("Failed to submit form. Please try again.");
    }
  };



  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validate()) {

      const original_date = Date.now()

      if (formData.delivery_method === "online") {
        try {
          const { id: order_id, currency, amount, rzp_key_id } = await createRzyOrder({
            amount: formData.amount,
            currency: "INR",
            receipt: "PLF-" + original_date,
          }).unwrap();

          const options = {
            key: rzp_key_id,
            amount,
            currency,
            name: products?.vendor,
            description: "X - Transaction",
            image: products?.image?.src,
            order_id,
            handler: async function (response) {
              await handlePaymentSuccess(response, original_date);
            },
            prefill: {
              name: formData.first_name,
              email: formData.email,
              contact: formData.phone,
            },
            theme: {
              color: "#3399cc",
            },
          };

          const rzp = new Razorpay(options);

          rzp.on('payment.failed', function (response) {
            handlePaymentFailure(response, original_date);
          });

          rzp.on('payment.closed', function () {
            handlePaymentExit(original_date);
          });

          rzp.open();
        } catch (error) {
          return toast.error(resolveRTKError(error));
        }
      } else {

        createorderhandle("Pending");

      }
    } else {
      setFormStatus("Failed to submit order. Please try again.");
      return toast.error("Failed to submit order. Please try again.");
    }
  }


  const handlePaymentSuccess = async (response, order_id) => {
    const resPaymentStatus = await verifyPayment(response);

    if (resPaymentStatus.data.status === "success") {
      try {
        return createorderhandle('Paid')
      } catch (error) {
        return createorderhandle('Fail')
      }

    } else {
      return createorderhandle('Fail')
    }
  };

  const handlePaymentFailure = async (response, order_id) => {
    try {
      return createorderhandle('Fail')


    } catch (error) {
      return createorderhandle('Fail')
    }
  };

  const handlePaymentExit = async (order_id) => {
    try {
      return createorderhandle('Pending')
    } catch (error) {
      return createorderhandle('Fail')
    }
  };

  const incrementQuantity = () => {
    setQuantity((prevQuantity) =>
      prevQuantity < 5 ? prevQuantity + 1 : prevQuantity
    );
  };

  const decrementQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  return (
    <div className="bg-zinc-500">
      <Script src='https://checkout.razorpay.com/v1/checkout.js' />
      <ToastContainer />
      <div className=" max-w-md mx-auto bg-[#f7f9f6] fontPoppins">
        <div className="">
          {/* <img
            src={products?.image?.src}
            alt="pic"
            className="rounded-xl"
            width="100%"
            height="100%"
            loading="lazy"
          /> */}


          <Carousel className="m-auto w-full " autoPlay infiniteLoop centerMode interval={2000} showStatus={false} showArrows={false} thumbWidth={80} width='100%'   >
            {
              images?.map((e, key) => {
                return <img
                  key={key}
                  src={e}
                  alt="pic"
                  className="px-1"
                  width="100%"
                  height="100%"
                  loading="lazy"
                />

              })
            }
          </Carousel>

        </div>


        <div className=" px-3 sm:px-5">

          <div className="my-5  grid ">
            <h2 className="text-xl font-semibold text-gray-900">
              {products?.title}
            </h2>
            <div className="flex items-baseline space-x-2 mt-4">
              <span className="text-3xl font-semibold text-gray-900">
                ₹{parseInt(selectProducts?.price)}
              </span>
              <span className="text-gray-400 text-2xl line-through">
                ₹{parseInt(selectProducts?.compare_at_price)}
              </span>
              <span className="text-green-600 text-sm font-semibold bg-green-100 px-2 py-0.5 rounded-full">
                {parseInt(
                  ((selectProducts?.compare_at_price - selectProducts?.price) /
                    selectProducts?.compare_at_price) *
                  100
                )}
                % off
              </span>
            </div>
            <h4 className="my-4">
              <span className="font-semibold">Size:&nbsp;</span>
              <span className="bg-green-500 text-white rounded-full py-1 px-3">
                {selectProducts?.title}
              </span>
            </h4>
            <div className="flex  items-center gap-3">
              <label className="block text-sm font-medium text-gray-700">
                Quantity:
              </label>
              <div className="flex border border-black w-fit  items-center space-x-2">
                <button
                  type="button"
                  onClick={decrementQuantity}
                  disabled={quantity <= 1}
                  className="bg-gray-200 px-2 py-1 "
                >
                  -
                </button>
                <span className="px-5">{quantity}</span>
                <button
                  type="button"
                  onClick={incrementQuantity}
                  disabled={quantity >= 5}
                  className="bg-gray-200 px-2 py-1 "
                >
                  +
                </button>
              </div>
            </div>
            <div className="bg-green-50 text-green-700 px-2 py-4 sm:p-4 rounded-lg mt-4 -mx-1 ">
              <h3 className="text-lg font-semibold">OFFER</h3>
              <ul className="list-disc list-inside mt-2 text-sm">
                <li>Get {discount}% instant discount on online payment</li>
                <li>COD available</li>
              </ul>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="rounded-xl shadow-md space-y-4 p-3  bg-white">
              <div className="flex space-x-3">
                <div className="flex-1">
                  <label
                    htmlFor="first_name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First Name
                  </label>
                  <input
                    id="first_name"
                    type="text"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    autoComplete="given-name"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  />
                </div>
                <div className="flex-1">
                  <label
                    htmlFor="last_name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last Name
                  </label>
                  <input
                    id="last_name"
                    type="text"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    autoComplete="family-name"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone
                </label>
                <div className="relative">
                  <span className="absolute top-2 text-lg px-2 border-r-2">+91</span>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                    pattern="[0-9]{10}"
                    maxLength="10"
                    // placeholder="+91"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 pl-14"
                  />
                </div>

              </div>

              <div className="flex space-x-3">
                <div className="flex-1">
                  <label
                    htmlFor="zipcode"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Pincode
                  </label>
                  <input
                    id="zipcode"
                    type="text"
                    maxLength="6"
                    name="zipcode"
                    value={formData.zipcode}
                    onChange={handleChange}
                    autoComplete="postal-code"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  />
                </div>

                <div className=" flex-1">
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-700"
                  >
                    City
                  </label>
                  <input
                    id="city"
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    autoComplete="locality"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  />
                </div>
              </div>


              <div>
                <label
                  htmlFor="state"
                  className="block text-sm font-medium text-gray-700"
                >
                  State
                </label>
                <input
                  id="state"
                  type="text"
                  name="state"
                  value={formData.state || ""}
                  onChange={handleChange}
                  autoComplete="state"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>
              <div>
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-gray-700"
                >
                  Country
                </label>
                <input
                  id="country"
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  autoComplete="country"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>
              <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Address
                </label>
                <input
                  id="address"
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  autoComplete="street-address"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>
              {/* <div>
                <label
                  htmlFor="tags"
                  className="block text-sm font-medium text-gray-700"
                >
                  Comment
                </label>
                <input
                  id="tags"
                  type="text"
                  name="tags"
                  value={formData.tags}
                  onChange={handleChange}
                  autoComplete="off"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div> */}
            </div>

            <h2 className="text-lg font-semibold text-gray-900 mt-8">
              Payment method
            </h2>
            <div className="mt-4">
              <label className="flex items-center space-x-3 border px-2 py-3 rounded-md">
                <input
                  type="radio"
                  name="delivery_method"
                  value="online"
                  defaultChecked
                  className="text-green-600 focus:ring-green-500"
                  onChange={handleChange}
                />
                <div className="w-7/12 sm:w-8/12  items-center space-x-2">
                  <img
                    src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/eecd9cfe-706a-4d7f-0556-a9f504eb7d00/public"
                    alt="Paytm"
                    className=""
                  />
                </div>
                <span className="text-green-600 text-xs font-semibold col-span-2">
                  Extra {discount}% off
                </span>
              </label>
              <label className="flex items-center space-x-3 mt-4 border p-2 rounded-md">
                <input
                  type="radio"
                  name="delivery_method"
                  value="cod"
                  className="text-gray-600 focus:ring-green-500"
                  onChange={handleChange}
                />
                <span className="text-gray-800">Cash on delivery</span>
              </label>
            </div>

            <h2 className="text-lg font-semibold text-gray-900 mt-8">
              Order info
            </h2>
            <div className="bg-green-500 text-white p-4 rounded-lg mt-4">
              <div className="flex justify-between text-sm">
                <span>Sub total</span>
                <span>₹{parseInt(subtotal)}</span>
              </div>
              <div className="flex justify-between text-sm mt-2">
                <span>Qty</span>
                <span>x {quantity}</span>
              </div>
              <div className="flex justify-between text-sm mt-2">
                <span>Shipping Cost</span>
                <span>Free</span>
              </div>
              {formData.delivery_method !== "cod" && (
                <div className="flex justify-between text-sm mt-2">
                  <span>Discount({discount}%)</span>
                  <span>-₹{formData.discount_amount}</span>
                </div>
              )}
              <div className="border-t border-green-400 mt-3"></div>
              <div className="flex justify-between font-bold text-lg mt-3">
                <span>Total</span>
                <span>₹{parseInt(formData.amount)}</span>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-yellow-200 hover:bg-yellow-300 text-green-900 font-semibold py-2 px-4 rounded-lg w-full mt-4"
              >
                Place Order
              </button>
            </div>
          </form>

          <div className="flex justify-around text-center text-gray-700 mt-6">
            <div>
              <img
                src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/b817eb42-9165-400c-4947-0dc9142fec00/public"
                alt="100% organic"
                className="h-8 mx-auto"
              />
              <div className="text-xs mt-2">100% organic</div>
            </div>
            <div>
              <img
                src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/1b0073a2-efe5-4626-62e7-fa5cacdddc00/public"
                alt="Toxic free"
                className="h-8 mx-auto"
              />
              <div className="text-xs mt-2">Toxic free</div>
            </div>
            <div>
              <img
                src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/793b21f5-37cb-420c-f22a-d8c28d416800/public"
                alt="Sea weed extract"
                className="h-8 mx-auto"
              />
              <div className="text-xs mt-2">Sea weed extract</div>
            </div>
            <div>
              <img
                src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/162709bc-60b9-40f8-4c96-d1d1571e5500/public"
                alt="Free shipping"
                className="h-8 mx-auto"
              />
              <div className="text-xs mt-2">Free shipping</div>
            </div>
          </div>

          <div className="my-5">
            <YoutubeFrame vid='a8PDMeiKOwE' className="" />
          </div>

          <div className="text-center mt-3">
            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/01291425-cb6b-470b-4b4b-2c2e1a2c9c00/public" alt="Logo" className="w-40 mx-auto" width='100%' height='100%' loading="lazy" />

            <div className="text-md mt-2 font-semibold">{products?.vendor}</div>
            <div className="text-md mt-1">FF 14, Ujala Avenue, Sarkhej Road, Vishala, Ahmedabad Gujarat (INDIA) - 380055</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
