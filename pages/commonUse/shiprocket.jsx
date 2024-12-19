import { useSelector } from "react-redux";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
const ShiProcket = () => {
  const router = useRouter();

  const searchParams = useSearchParams();
  const productInfo = useSelector((state) => state.productInfo);

  const [tagsall, settagsall] = useState("plantifygarden.com");


 
  // const pathnameurl = ["brf"];
  // const googlepathnameurl = ["brcgg"];

  useEffect(() => {
    const v = localStorage.getItem("PATH");
    settagsall((vx) => (v ? v : vx));
  }, []);

  const handleShiProcket = async () => {
    const quantity = productInfo?.quantity;
    
    const selectProducts = productInfo?.selectProducts;
    

    const products = [
      {
        variantId: selectProducts.id,
        quantity: quantity,
      },
    ];
    const checkoutData = {
      key: "value",
      type: "product",
      products,
      couponCode: "",
      utmParams: "utm_medium=123&utm_source=456",
      cartAttributes: {
        tag: tagsall,
      },
    };


    if (typeof shiprocketCheckoutEvents !== "undefined") {
      try {
        const orderResponse = await shiprocketCheckoutEvents.buyDirect(
          checkoutData
        );
      } catch (error) {
        console.error("Error placing order:", error);
      } finally {
      }
    } else {
      toast.error("Unable to process your order. Please try again later.");

    }
  };

  const handleConfirmPlaceOrder = async () => {
    console.log("Confirm & place order clicked!");

      if (window.conversion_code) {
        console.log('window.conversion_code: ', window.conversion_code);
        window.gtag("event", "conversion", {
          send_to: window.conversion_code,
          event_callback: () => {
            localStorage.setItem("window.conversion_codess",window.conversion_code)
            return;
          },
        });
      }

 
  };

  useEffect(() => {
    console.log(window.location.pathname.replace(/\//g, ""));

    const observer = new MutationObserver((mutationsList) => {
      mutationsList.forEach((mutation) => {
        if (mutation.type === "childList") {
          const addedNodes = mutation.addedNodes;

          addedNodes.forEach((node) => {
            if (
              node.nodeType === 1 &&
              node.tagName === "FORM" &&
              node.method.toLowerCase() === "post"
            ) {
              console.log("node.nodeType: ", node.nodeType);
              console.log("node.tagName: ", node.tagName);
              console.log("node.method: ", node.method);
              handleConfirmPlaceOrder();

              // if (
              //   pathnameurl.includes(
              //     window.location.pathname.replace(/\//g, "")
              //   )
              // ) {
              //   router.push('/thank-you');
              // }
            }
          });
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>

      <button
        className="relative w-full sm:w-[20rem] shoporder  shiprocketbutton " 
        onClick={handleShiProcket}
      >
        <div className="relative">
          <div className="bg-green-700 text-white text-2xl font-semibold py-2 mb-4 w-full rounded-xl">
            <div className="flex items-center align-middle justify-center">
              BUY NOW&nbsp;
              <img
                src="https://fastrr-boost-ui.pickrr.com/assets/images/boost_button/upi_options.svg"
                alt="Google Pay | Phone Pay | UPI"
                className=""
              />
              &nbsp;
              <img
                src="https://fastrr-boost-ui.pickrr.com/assets/images/boost_button/right_arrow.svg"
                className=""
                alt="right_arrow"
              />
            </div>
          </div>
        </div>
        <img
          src="https://fastrr-boost-ui.pickrr.com/assets/images/boost_button/powered_by.svg "
          alt="pic"
          className="absolute bottom-[1.3rem]  w-24 right-3 sm:w-28"
        />
      </button>
    </>
  );
};

export default ShiProcket;
