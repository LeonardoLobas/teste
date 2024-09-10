import { Swiper, SwiperSlide } from "swiper/react";
import verao from "./img/verao.jpg";
import outono from "./img/outono.jpg";
import inverno from "./img/inverno.jpg";
import primavera from "./img/primavera.jpg";

const HomePage = () => {
    const data = [
        { id: "1", image: verao },
        { id: "2", image: outono },
        { id: "3", image: inverno },
        { id: "4", image: primavera },
    ];

    return (
        <main className="flex flex-col h-screen font-playwrite-cu  bg-[#d2f5cb]  italic">
            <header className="animate-dropHeader flex w-full h-32 bg-[#f7fbff] text-[#aaaaaa] font-medium text-xl overflow-hidden">
                <ul className="flex w-full h-full items-center justify-around">
                    <li className="border-2 p-4 rounded-2xl hover:border-[#8bfd74] bg-[#d2f5cb] border-[#d2f5cb]">
                        <a href="">Primavera</a>
                    </li>
                    <li className="border-2 p-4 rounded-2xl hover:border-[#8bfd74] bg-[#d2f5cb] border-[#d2f5cb]">
                        <a href="">Verão</a>
                    </li>
                    <li className="border-2 p-4 rounded-2xl hover:border-[#8bfd74] bg-[#d2f5cb] border-[#d2f5cb]">
                        <a href="">Outono</a>
                    </li>
                    <li className="border-2 p-4 rounded-2xl hover:border-[#8bfd74] bg-[#d2f5cb] border-[#d2f5cb]">
                        <a href="">Inverno</a>
                    </li>
                </ul>
            </header>
            <section className="flex w-full h-full bg-[#e3ece2] items-center">
                <Swiper
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    navigation
                    coverflowEffect={{
                        depth: 1000,
                        scale: 10,
                        modifier: 2,
                        rotate: 50,
                        stretch: 20,
                    }}
                    className="w-[700px] h-[350px] rounded-xl"
                >
                    {data.map((item) => (
                        <SwiperSlide key={item.id}>
                            <img
                                src={item.image}
                                alt="Slider"
                                className=" w-full h-full object-cover"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
        </main>
    );
};

export default HomePage;
