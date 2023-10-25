
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default function MembersCarousel({ ourTeam }) {

    return (

        <Swiper
            style={{
                "--swiper-pagination-color": "black",
                "--swiper-navigation-color": "black",
            }}

            modules={[Navigation, Pagination, Autoplay]}
            loop={true}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false
            }}
            navigation
            breakpoints={{
                0: {
                    slidesPerView: 1,
                    spaceBetween: 50,
                },
                630: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },
                1030: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                }
            }}
            pagination={{ clickable: true }}

        >
            {ourTeam.map((member) => {
                return (
                    <SwiperSlide key={member.name}>
                        <div className="member-container">
                            <div>
                                <img src={member.image} />
                            </div>

                            <div>
                                <h3>{member.name} {member.lastName}</h3>

                                <p style={{ fontFamily: "'karla','sans-serif'" }}>{member.smallDescription}</p>
                                <Link onClick={() => {
                                    document.body.scrollTop = 0
                                    document.documentElement.scrollTop = 0
                                }} to={'/stylists/' + member.name + '-' + member.lastName}>{'About ' + member.name}</Link>
                            </div>
                        </div>
                    </SwiperSlide>)
            })}
        </Swiper>

    )
}