"use client";

import React from "react";
import couponData from "./couponData";
import SectionHeader from "../Common/SectionHeader";
import SingleCoupon from "./SingleCoupon";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";

const CouponCarousel = ({ title, description, data }: any) => {
  return (
    <section className="pt-24 pb-12">
      {/* Added more top padding */}
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        <SectionHeader
          headerInfo={{
            title,
            subtitle: title,
            description,
          }}
        />

        <Swiper
          spaceBetween={30}
          slidesPerView={4}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          className="mt-10 pb-16"
        >
          {data.slice(0, 6).map((coupon: any, key: number) => (
            <SwiperSlide key={key}>
              <SingleCoupon coupon={coupon} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-6 text-right">
          <a
            href="#"
            className="text-primary hover:underline"
          >
            See more -&gt;
          </a>
        </div>
      </div>
    </section>
  );
};

const Coupon = () => {
  return (
    <>
      <CouponCarousel
        title="Featured Coupons"
        description="Check out our best featured coupons picked just for you."
        data={couponData}
      />

      <CouponCarousel
        title="Hottest Coupons"
        description="Trending now – grab these hot deals before they're gone!"
        data={couponData}
      />

      <CouponCarousel
        title="New Coupons"
        description="Freshly dropped coupons just added to the collection."
        data={couponData}
      />
    </>
  );
};

export default Coupon;