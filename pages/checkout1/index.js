import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  useAllProductsFetchQuery,
  useCreateManyProductOrderMutation,
  useCreateRzyOrderMutation,
  useFetchProductsQuery,
  useVerifyPaymentMutation,
} from "../../redux/services/products";
import { resolveRTKError } from "../../redux/rtkQuery";
import dynamic from "next/dynamic";
import Script from "next/script";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { IoStar } from "react-icons/io5";
import { MdMenuOpen } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loader from "../Loader";

const YoutubeFrame = dynamic(() => import("./components/YoutubeFrame"), {
  loading: () => <p>load</p>,
});

const Page = () => {
  const { data: getproducts, error, isLoading } = useAllProductsFetchQuery();
  // console.log("get_all_products_data: ", getproducts);

  const [products, setProducts] = useState([]);

  const [createOrder, { isLoading: isSubmitting }] =
    useCreateManyProductOrderMutation();
  const [createRzyOrder, { isLoading: isRzySubmitting }] =
    useCreateRzyOrderMutation();

  const [verifyPayment, { isLoading: isVerifyPayment }] =
    useVerifyPaymentMutation();

  const [selectProducts, setSelectProducts] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  // console.log("subtotal: ", subtotal);
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
    // variant_id: 0,

    amount: 0,
    discount_amount: 0,
  });

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
        variant_id: products[0]?.id || "",
      }));

      setSelectProducts(products[0]);
    }
  }, [products]);

  useEffect(() => {
    if (getproducts && getproducts.length > 0) {
      const allVariants = getproducts.flatMap((product) =>
        product.variants.map((variant) => ({
          ...variant,
          productTitle: product.title,
          productImage: product.images?.[0]?.src,
        }))
      );
      setProducts(allVariants);
    }
  }, [getproducts]);

  useEffect(() => {
    if (error) {
      return toast.error(resolveRTKError(error));
    }
  }, [error]);

  const [productQuantities, setProductQuantities] = useState({});
  const [selectedProducts, setSelectedProducts] = useState([]);
  // console.log("selectedProductsssss: ", selectedProducts);
  // console.log("selectedProducts: ");

  useEffect(() => {
    const calculatedSubtotal = selectedProducts.reduce((acc, product) => {
      const quantity = productQuantities[product.id] || 0;
      return acc + product.price * quantity;
    }, 0);

    setSubtotal(calculatedSubtotal);

    let calculatedTotal = calculatedSubtotal;
    if (formData.delivery_method === "online") {
      const d_amount = (calculatedSubtotal * discount) / 100;

      setFormData((prevState) => ({
        ...prevState,
        discount_amount: d_amount,
      }));

      calculatedTotal -= d_amount;
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
  }, [formData.delivery_method, selectedProducts, productQuantities, discount]);

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
        (typeof value === "string" && value.trim() === "") ||
        (typeof value === "number" && isNaN(value))
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
      let checkIp = await axios
        .get("https://api.ipify.org?format=json")
        .then((response) => {
          return response.data.ip;
        })
        .catch((error) => console.log(error));


      const response = await createOrder({
        ...formData,
        extradiscount: formData?.delivery_method === "cod" ? 0 : discount,
        tags: "plantifygarden-in",
        line_items: selectedProducts.reduce((acc, { id, quantity, price }) => {
          return [
            ...acc,
            {
              variant_id: id,
              quantity,
              product_price: price,
            },
          ];
        }, []),
        payment_status: paymentStatus,
        ip: checkIp ? checkIp : "",
      }).unwrap();

      if (window.conversion_code) {
      
        window.gtag("event", "conversion", {
          send_to: window.conversion_code,
          event_callback: () => {
            return;
          },
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
      });

      return (window.location.href = `${process.env.SHOPIFY_URL}/${response?.response?.order?.id}/orders/${response?.response?.order?.token}`);
    } catch (error) {
      setFormStatus("Failed to submit form. Please try again.");
      return toast.error("Failed to submit form. Please try again.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (selectedProducts.length === 0) {
      return toast.error("Please select at least one product!");
    }

    if (validate()) {
      const original_date = Date.now();

      if (formData.delivery_method === "online") {
        try {
          const {
            id: order_id,
            currency,
            amount,
            rzp_key_id,
          } = await createRzyOrder({
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

          rzp.on("payment.failed", function (response) {
            handlePaymentFailure(response, original_date);
          });

          rzp.on("payment.closed", function () {
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
  };

  const handlePaymentSuccess = async (response, order_id) => {
    const resPaymentStatus = await verifyPayment(response);

    if (resPaymentStatus.data.status === "success") {
      try {
        return createorderhandle("Paid");
      } catch (error) {
        return createorderhandle("Fail");
      }
    } else {
      return createorderhandle("Fail");
    }
  };

  const handlePaymentFailure = async (response, order_id) => {
    try {
      return createorderhandle("Fail");
    } catch (error) {
      return createorderhandle("Fail");
    }
  };

  const handlePaymentExit = async (order_id) => {
    try {
      return createorderhandle("Pending");
    } catch (error) {
      return createorderhandle("Fail");
    }
  };

  const incrementQuantity = (variant) => {
    setProductQuantities((prevQuantities) => {
      const updatedQuantities = {
        ...prevQuantities,
        [variant.id]: Math.min((prevQuantities[variant.id] || 0) + 1, 5),
      };

      if (updatedQuantities[variant.id] > 0) {
        setSelectedProducts((prevSelected) => {
          const productIndex = prevSelected.findIndex(
            (item) => item.id === variant.id
          );

          if (productIndex === -1) {
            return [
              ...prevSelected,
              { ...variant, quantity: updatedQuantities[variant.id] },
            ];
          } else {
            const updatedProducts = [...prevSelected];
            updatedProducts[productIndex].quantity =
              updatedQuantities[variant.id];
            return updatedProducts;
          }
        });
      }

      return updatedQuantities;
    });
  };

  const decrementQuantity = (variant) => {
    setProductQuantities((prevQuantities) => {
      const updatedQuantities = {
        ...prevQuantities,
        [variant.id]: Math.max((prevQuantities[variant.id] || 0) - 1, 0),
      };

      setSelectedProducts((prevSelected) => {
        const productIndex = prevSelected.findIndex(
          (item) => item.id === variant.id
        );

        if (updatedQuantities[variant.id] === 0) {
          return prevSelected.filter((item) => item.id !== variant.id);
        } else if (productIndex !== -1) {
          const updatedProducts = [...prevSelected];
          updatedProducts[productIndex].quantity =
            updatedQuantities[variant.id];
          return updatedProducts;
        }

        return prevSelected;
      });

      return updatedQuantities;
    });
  };
  const ratingValue = 4.8;
  const totalStars = 5;

  const [openModalId, setOpenModalId] = useState(null);

  const openModal = (id) => {
    setOpenModalId(id);
  };

  const closeModal = () => {
    setOpenModalId(null);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="bg-black">
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      <Loader visible={isSubmitting} />
      <ToastContainer />
      <div className=" max-w-2xl mx-auto bg-zinc-100 fontPoppins">
        <div className="flex items-center justify-between py-3 bg-white px-3 p_s_d">
          <img
            src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/01291425-cb6b-470b-4b4b-2c2e1a2c9c00/public"
            className="w-24"
          />
          <MdMenuOpen size={23} />
        </div>

        <div className=" md:px-2 px-1">
          <div className="pb-4 ">
            <div className="">
              <div className="">
                {products?.map((variant) => (
                  <div
                    key={variant.id}
                    className="bg-white p_s_d grid grid-cols-12 justify-center items-center  border border-solid border-gray-200 rounded-md my-4 py-3 md:gap-2 gap-3 px-1"
                  >
                    <div className=" md:col-span-3 col-span-5">
                      {variant.productImage && (
                        <img
                          src={variant.productImage}
                          alt={`${variant.productTitle} image`}
                          className="md:w-5/6 w-full mx-auto border border-solid border-gray-200 rounded-md cursor-pointer"
                          onClick={() => openModal(variant.id)}
                        />
                      )}
                      {openModalId === variant.id && (
                        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
                          <div className="relative bg-white p-4 rounded-md shadow-lg m-1">
                            <img
                              src={variant.productImage}
                              alt={`${variant.productTitle} enlarged`}
                              className="w-full max-w-lg mx-auto"
                            />
                            <div className="fontInter font-semibold md:text-[0.8vw] text-md text-center">
                              {variant.productTitle}
                            </div>
                            <button
                              className="absolute top-2 right-2 text-white bg-black hover:bg-gray-600 rounded-full px-2 text-lg"
                              onClick={closeModal}
                            >
                              &times;
                            </button>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="md:col-span-9  col-span-7">
                      <div className="fontInter font-semibold md:text-[1.1vw] text-md md:pt-1">
                        {variant.productTitle}
                      </div>

                      <div className="fontPoppins sm:flex items-center sm:space-x-2 space-x-1 py-1 ">
                        <div className="flex text-[#ffd203]">
                          {Array.from({ length: totalStars }, (_, index) => (
                            <IoStar
                              key={index}
                              color={
                                index < Math.round(ratingValue)
                                  ? "gold"
                                  : "lightgray"
                              }
                              size={20}
                            />
                          ))}
                        </div>

                        <span className="sm:text-md text-sm font-medium text-gray-400">
                          Excellent
                        </span>

                        <span className="sm:text-lg text-sm">|</span>

                        <span className="sm:text-lg text-sm font-semibold ">
                          {ratingValue}
                        </span>

                        <span className="sm:text-md text-sm text-gray-400">
                          out of 5
                        </span>
                      </div>

                      <div className="flex items-baseline space-x-1 md:space-x-2 py-1">
                        <span className="text-gray-400 md:text-md text-sm line-through">
                          ₹{parseInt(variant.compare_at_price)}
                        </span>
                        <span className="md:text-3xl text-2xl font-extrabold text-[#12813f]">
                          ₹{parseInt(variant.price)}
                        </span>
                        <span className="clip_off text-black text-[0.7rem] font-semibold bg-[#ebeb27] md:px-3 px-2 py-0.5 ">
                          {parseInt(
                            ((variant.compare_at_price - variant.price) /
                              variant.compare_at_price) *
                              100
                          )}
                          % off
                        </span>
                      </div>

                      <h4 className="mb-3">
                        <span className="font-semibold">Size:&nbsp;</span>
                        <span className="bg-[#c8e27f] sm:text-sm text-[0.8rem]  text-[#12813f] font-semibold rounded-full px-3">
                          {variant?.title}
                        </span>
                      </h4>

                      <div className="flex items-center justify-between">
                        <div className="flex qty_shadoow border border-solid border-gray-200 rounded-md items-center md:space-x-16 space-x-5 md:mr-3 ">
                          <button
                            type="button"
                            onClick={() => decrementQuantity(variant)}
                            disabled={(productQuantities[variant.id] || 0) <= 0}
                            className="bg-gray-200 px-2 py-1"
                          >
                            -
                          </button>
                          <span className="px-5">
                            {productQuantities[variant.id] || 0}
                          </span>
                          <button
                            type="button"
                            onClick={() => incrementQuantity(variant)}
                            disabled={(productQuantities[variant.id] || 0) >= 5}
                            className="bg-gray-200 px-2 py-1"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className=" text-black px-2 py-2 sm:p-4 rounded-lg sm:mt-4 mt-2 mx-1 border border-gray-800 border-dashed">
                <h3 className="text-lg font-semibold">OFFER</h3>
                <ul className="list-disc list-inside mt-2 text-sm">
                  <li>Get {discount}% instant discount on online payment</li>
                  <li>COD available</li>
                </ul>
              </div>
            </div>

            <div className="text-lg font-semibold text-gray-900 mt-4 px-1">
              Shipping Details
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="rounded-md p_s_d space-y-4 p-3  bg-white">
              <div className="flex space-x-3 pt-4">
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
                  <span className="absolute top-2 text-lg px-2 border-r-2">
                    +91
                  </span>
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
            <div className="mt-4 ">
              <label className="flex items-center space-x-3 border px-2 py-3 rounded-md ">
                <input
                  type="radio"
                  name="delivery_method"
                  value="online"
                  defaultChecked
                  className="text-green-600 focus:ring-green-500 "
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

            <h2 className="text-lg font-semibold text-gray-900 mt-4">
              Order info
            </h2>

            <div className="selected-products mt-3">
              {selectedProducts.length > 0 ? (
                selectedProducts.map((variant) => (
                  <div
                    key={variant.id}
                    className=" flex  items-center justify-between p-4 border border-solid border-gray-200 rounded-md mb-4 bg-white space-x-3"
                  >
                    <div className="flex items-center space-x-4">
                      <img
                        src={variant.productImage}
                        alt={variant.productTitle}
                        className="w-20 h-20 object-cover border border-solid border-gray-200 rounded-md"
                      />

                      <div>
                        <h3 className="font-semibold md:text-lg text-sm">
                          {variant.productTitle}
                        </h3>
                        <div className="text-gray-600 text-sm">
                          Qty:- {productQuantities[variant.id]}
                        </div>
                      </div>
                    </div>

                    <div className="font-bold  md:text-lg text-sm text-gray-900">
                      ₹{variant.price}
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-red-700 text-sm">
                  Please select at least one product!
                </p>
              )}
            </div>
            <div className="bg-[#339f61] text-white p-4 rounded-lg mt-4">
              <div className="flex justify-between text-sm">
                <span>Sub total</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="flex justify-between text-sm mt-2">
                <span>Qty</span>
                <span>
                  {selectedProducts.reduce(
                    (total, product) =>
                      total + (productQuantities[product.id] || 0),
                    0
                  )}
                </span>
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
                <span>₹{formData.amount}</span>
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

          <div className="my-6">
            <Slider {...settings}>
              <YoutubeFrame
                vid="on0lEliE9Ps?si=yALddjY0PJk5U5Z3"
                className=""
              />
              <YoutubeFrame
                vid="_7D7TIJ4Mq8?si=Vro-FhXNcAEwi9zs"
                className=""
              />
            </Slider>
          </div>

          <div className="text-center mt-10 bg-gray-200">
            <img
              src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/01291425-cb6b-470b-4b4b-2c2e1a2c9c00/public"
              alt="Logo"
              className="w-24 pt-3 mx-auto"
              width="100%"
              height="100%"
              loading="lazy"
            />

            <div className="text-md mt-2 font-semibold">{products?.vendor}</div>
            <div className="text-sm pb-3">
              FF 14, Ujala Avenue, Sarkhej Road, Vishala, Ahmedabad Gujarat
              (INDIA) - 380055
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
