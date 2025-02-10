import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import axios from "axios";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_PATH = import.meta.env.VITE_API_PATH;

export default function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/${API_PATH}/products`);
        setProducts(res.data.products);
      } catch (error) {
        console.error(error);
        alert("取得產品失敗");
      }
    };
    getProducts();
  }, []);

  return (
    <div className="mt-5">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={Math.min(3, products.length)}
        spaceBetween={10}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={products.length > 3}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <img
              src={product.imageUrl}
              alt={product.title}
              style={{ width: "100%", height: "800px", objectFit: "cover" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
