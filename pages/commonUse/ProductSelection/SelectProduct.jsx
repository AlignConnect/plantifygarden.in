import {
  changeSelectedProduct,
  decrementQuantity,
  incrementQuantity,
} from "@/redux/slices/ProductInfo";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ShiProcket from "../shiprocket";


const SelectProduct = () => {
  const searchParams = useSearchParams();

  const taboola_tracking = searchParams.get("tbclid");

  const [subtotal, setSubtotal] = useState(0);

  const dispatch = useDispatch();
  const productInfo = useSelector((state) => state.productInfo);

  // console.log("productInfoproductInfo", productInfo)

  const products = productInfo?.productsdata;
  const quantity = productInfo?.quantity;
  const allVariants = productInfo?.allVariants;
  const selectProducts = productInfo?.selectProducts;

  const handleChangeSingleVarient = (event) => {
    const variantId = event.target.value;
    // console.log('variantId: ', variantId);
    const selected = allVariants.find((v) => {
      return v.id === Number(variantId);
    });

    dispatch(changeSelectedProduct({ selectProducts: selected }));
  };

  useEffect(() => {
    const calculatedSubtotal = parseInt(selectProducts?.price) * quantity;
    setSubtotal(calculatedSubtotal);
  }, [quantity, selectProducts?.price]);

  const reasons = (arr) => {
    return arr?.map((e, key) => {
      return (
        <div key={key} className="">
          <img
            src={e.reason_img}
            className="mx-auto md:w-20 w-16 "
            alt="reason_img"
            loading="lazy"
          />
          <div className="md:text-md text-sm text-center text-black font-semibold pt-2">
            <div dangerouslySetInnerHTML={{ __html: e.reason_title }} />
          </div>
        </div>
      );
    });
  };

  return (
    <div className="bg-white py-5 fontPoppins sm:py-10">
      <div className="max-w-5xl mx-auto  px-3  ">
        <div className="grid sm:grid-cols-2 items-center">
          <div className="">
            <img
              src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/513e3e33-1e2c-466d-3310-0208e722dc00/public"
              alt="pic"
              className="w-full "
              loading="lazy"
            />
          </div>

          <div className="">
            <div className="flex items-center py-2 space-x-2" id="order-now">
              <span className="text-gray-500 text-lg line-through">
                ₹{parseInt(selectProducts?.compare_at_price)}
              </span>
              <span className="text-4xl font-extrabold text-gray-900">
                <span>₹{parseInt(selectProducts?.price)}</span>
              </span>
              <span className="clip_off text-black text-sm font-semibold bg-yellow-300 px-4 py-0.5 ">
                {parseInt(
                  ((selectProducts?.compare_at_price - selectProducts?.price) /
                    selectProducts?.compare_at_price) *
                  100
                )}
                % off
              </span>
            </div>

            {/* Size Info */}
            <div className="flex items-center my-2">
              <span className="text-lg font-semibold">Size:</span>
              <span className="bg-yellow-100 text-yellow-600 font-semibold py-1 px-2 rounded-md ml-2">
                {selectProducts?.title}
              </span>
            </div>
          </div>
        </div>

        {/* <div className="md:col-span-8 col-span-7  text-left">
            <h2 className="sm:text-[1.6vw] text-md font-extrabold">
              Buy more, Save more!
            </h2>
            <p className="text-gray-600 text-sm fontPoppins text-left">
              Don't miss out on these amazing deals!
            </p>
          </div> */}

        <button className="bg-red-500 text-white font-bold py-2 px-4 rounded-md md:text-md text-sm">
          Special offer!
        </button>
        <div className="text-green-700 md:text-md text-[0.92rem] bg-[#fff9ef] my-5 p-1 font-semibold px-2">
          Get extra 10% discount on online payment
        </div>

        {/* <div className="flex  items-center gap-3 mt-3">
              <label className="text-lg font-semibold">Quantity:</label>
              <div className="flex border border-yellow-400 w-fit  items-center space-x-2 bg-yellow-100">
                <button
                  type="button"
                  onClick={() =>
                    dispatch(decrementQuantity({ quantity: quantity }))
                  }
                  disabled={quantity <= 1}
                  className="bg-yellow-100 px-2 py-1 "
                >
                  -
                </button>
                <span className="px-5">{quantity}</span>
                <button
                  type="button"
                  onClick={() =>
                    dispatch(incrementQuantity({ quantity: quantity }))
                  }
                  disabled={quantity >= 5}
                  className="bg-yellow-100 px-2 py-1 "
                >
                  +
                </button>
              </div>
            </div> */}

        <div
          className="grid grid-cols-1 items-center py-3 mt-2 selectedItem "
          id="buynow"
        >
          {allVariants?.map((variant, key) => {
            return (
              <label
                key={variant.id}
                value={variant.id}
                htmlFor={variant.id}
                className={`relative`}
              >
                {key === 1 && (
                  <div className="absolute top-0 left-0 bg-[#df7700] px-1 rounded-ss-lg z-10 text-white text-sm">
                    Most popular
                  </div>
                )}
                <div
                  className={`border-2 rounded-lg border-green-500 p-2 sm:p-4 mb-4 sm:flex items-center justify-between gap-5 ${selectProducts.id === variant.id ? "activeStatus2" : ""
                    }`}
                >
                  <div
                    className={`flex items-center gap-3 ${key === 1 && "pt-5"}`}
                  >
                    <input
                      type="radio"
                      id={variant.id}
                      name="name"
                      value={variant.id}
                      onChange={handleChangeSingleVarient}
                      checked={selectProducts.id === variant.id}
                    />
                    <div>
                      <h3 className="font-bold text-md">
                        {variant?.title} (
                        {parseInt(
                          ((variant?.compare_at_price - variant?.price) /
                            variant?.compare_at_price) *
                          100
                        )}
                        % off)
                      </h3>
                      <p className="text-sm text-gray-500">
                        (extra 10% discount on online payment)
                      </p>
                    </div>
                  </div>
                  <div className="text-left ms-5 sm:ms-0 flex items-center gap-2 sm:block ">
                    <p
                      className="line-through text-md text-gray-400"
                      style={{ textDecoration: "line-through red" }}
                    >
                      ₹{parseInt(variant?.compare_at_price)}
                    </p>

                    <p className="text-green-700 font-bold text-2xl">
                      ₹{parseInt(variant?.price)}
                    </p>
                  </div>
                </div>
              </label>
            );
          })}
        </div>

        {/* <div className="flex  items-center gap-3 mt-2 mb-5">
          <label className="text-lg font-semibold">Quantity:</label>
          <div className="flex border border-yellow-400 w-fit  items-center space-x-2 bg-yellow-100">
            <button
              type="button"
              onClick={() =>
                dispatch(decrementQuantity({ quantity: quantity }))
              }
              disabled={quantity <= 1}
              className="bg-yellow-100 px-2 py-1 "
            >
              -
            </button>
            <span className="px-5">{quantity}</span>
            <button
              type="button"
              onClick={() =>
                dispatch(incrementQuantity({ quantity: quantity }))
              }
              disabled={quantity >= 5}
              className="bg-yellow-100 px-2 py-1 "
            >
              +
            </button>
          </div>
        </div> */}


        <ShiProcket />

        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/e87c6e29-6fc5-41dd-cde9-912aca28dc00/public" alt="" className="w-full"/>


        {/* <div className='text-md '>
          We are Available on-
        </div> */}


        <div className="flex items-center gap-7 py-2">
          <a href="https://bit.ly/3JvDOKa">
            <img
              src="/checkout_images/flipkart.png"
              alt=""
              className="sm:w-28 w-20 mx-auto"
            />
          </a>
          <a href="https://amzn.to/49VCQC0">
            <img
              src="/checkout_images//amazon.png"
              alt=""
              className="sm:w-24 w-20 mx-auto "
            />
          </a>
        </div>
        
        {/* <div className="">
          <Link
            href={{
              pathname: "/checkouts/",
              query: { tbclid: taboola_tracking },
            }}
          >
            <button className="bg-green-700 text-white text-2xl font-semibold py-2 my-4 w-full rounded-xl shoporder">
              BUY NOW
            </button>
          </Link>

        </div> */}


        <div className=" grid grid-cols-4 gap-5  mx-1">
          {reasons([
            {
              reason_img:
                "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/dfdd2c54-e5f0-47af-d805-a440a3cd4a00/public",
              reason_title: "ISO Certified",
            },
            {
              reason_img:
                "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/c27825f6-1dea-48f7-cb9b-c8b2309c2300/public",
              reason_title: "FDA approved",
            },
            {
              reason_img:
                "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/56e95e80-2ee4-45fc-ce12-fcfd650e7100/public",
              reason_title: "Pure Ayurvedic",
            },
            {
              reason_img:
                "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/b0480c36-7e8d-4968-db61-7c5fd2249500/public",
              reason_title: "GMP Certified",
            },
          ])}
        </div>
      </div>
    </div>
  );
};

export default SelectProduct;
