import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext"; // تأكد من استيراد ShopContext بشكل صحيح
import Breadcrum from "../Components/Breadcrums/Breadcrum";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts";

const Product = () => {
  const { all_product } = useContext(ShopContext); // استخدام السياق للوصول إلى المنتجات
  const { productId } = useParams(); // جلب معرف المنتج من URL

  // البحث عن المنتج
  const product = all_product?.find((e) => e.id === Number(productId));

  // إذا لم يتم العثور على المنتج
  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox/>
      <RelatedProducts/>
    </div>
  );
};

export default Product;
