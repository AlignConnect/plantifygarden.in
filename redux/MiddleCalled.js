import { resolveRTKError } from "@/redux/rtkQuery";
import { useFetchProductsQuery } from "@/redux/services/products";
import { getStoreProductInfo } from "@/redux/slices/ProductInfo";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const MiddleCalled = ({ children }) => {
  const {
    data: products,
    error,
    isLoading,
  } = useFetchProductsQuery({
    id: "9386455630116",
  });

  const dispatch = useDispatch();

  
  useEffect(() => {
    // console.log('products: ', products);
    if (products) {
      dispatch(
        getStoreProductInfo({
          productsdata: products,
          allVariants: products?.variants,
          selectProducts: products?.variants[0]
        })
      );
    }
  }, [products]);

  useEffect(() => {
    if (error) {
      return toast.error(resolveRTKError(error));
    }
  }, [error]);

  return <div>{children}</div>;
};

export default MiddleCalled;
