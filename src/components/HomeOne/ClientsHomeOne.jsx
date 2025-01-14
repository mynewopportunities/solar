import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';


const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 6,
    spaceBetween: 30,
    autoplay: {
        delay: 8000,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        575: {
            slidesPerView: 1,
        },
        767: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
        1350: {
            slidesPerView: 6,
        },
    }
};

function ClientsHomeOne({ className }) {
    return (
        <>
        <section className={`clients-section ${className || ''}`}>
            {/* Sponsors Outer */}
            <div className="sponsors-outer">
                <Swiper {...swiperOptions} className="clients-carousel owl-carousel owl-theme disable-navs">
                    {/* Clients Block */}
                    <SwiperSlide className="client-block">
                        <Link href="#"className="image">
                        <img src="../assets/images/clients/1.png" alt="Image"/>
                        <img src="../assets/images/clients/1-1.png" alt="Image"/>
                        </Link>
                    </SwiperSlide>
                    {/* Clients Block */}
                    <SwiperSlide className="client-block">
                        <Link href="#"className="image">
                        <img src="../assets/images/clients/2.png" alt="Image"/>
                        <img src="../assets/images/clients/2-1.png" alt="Image"/>
                        </Link>
                    </SwiperSlide>
                    {/* Clients Block */}
                    <SwiperSlide className="client-block">
                        <Link href="#"className="image">
                        <img src="../assets/images/clients/3.png" alt="Image"/>
                        <img src="../assets/images/clients/3-1.png" alt="Image"/>
                        </Link>
                    </SwiperSlide>
                    {/* Clients Block */}
                    <SwiperSlide className="client-block">
                        <Link href="#"className="image">
                        <img src="../assets/images/clients/4.png" alt="Image"/>
                        <img src="../assets/images/clients/4-1.png" alt="Image"/>
                        </Link>
                    </SwiperSlide>
                    {/* Clients Block */}
                    <SwiperSlide className="client-block">
                        <Link href="#"className="image">
                        <img src="../assets/images/clients/5.png" alt="Image"/>
                        <img src="../assets/images/clients/5-1.png" alt="Image"/>
                        </Link>
                    </SwiperSlide>
                    {/* Clients Block */}
                    <SwiperSlide className="client-block">
                        <Link href="#"className="image">
                        <img src="../assets/images/clients/6.png" alt="Image"/>
                        <img src="../assets/images/clients/6-1.png" alt="Image"/>
                        </Link>
                    </SwiperSlide>
                    {/* Clients Block */}
                    <SwiperSlide className="client-block">
                        <Link href="#"className="image">
                        <img src="../assets/images/clients/2.png" alt="Image"/>
                        <img src="../assets/images/clients/2-1.png" alt="Image"/>
                        </Link>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
        </>
    );
}

export default ClientsHomeOne;
