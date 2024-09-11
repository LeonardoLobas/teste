import { useState } from "react"; // Importa useState
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import verao from "./img/verao.jpg";
import outono from "./img/outono.jpg";
import inverno from "./img/inverno.jpg";
import primavera from "./img/primavera.jpg";

const HomePage = () => {
    const data = [
        {
            id: "1",
            titulo: "Verão",
            image: verao,
            text: "O verão, uma das quatro estações do ano, é caracterizado por elevadas temperaturas. Os dias ao longo dessa estação são mais extensos, e as noites são mais curtas.",
        },
        {
            id: "2",
            titulo: "Outono",
            image: outono,
            text: "Conhecido como estação das frutas, o outono acontece após o verão e antecede o inverno, representando um período de transição. No Brasil, tem início entre 20 e 21 de março.",
        },
        {
            id: "3",
            titulo: "Inverno",
            image: inverno,
            text: "Inverno é a estação mais fria do ano em várias regiões do planeta. Para sobreviver a essa época, alguns animais, incluindo seres humanos, desenvolveram técnicas de adaptação.",
        },
        {
            id: "4",
            titulo: "Primavera",
            image: primavera,
            text: "Primavera, também conhecida como a estação das flores, é considerada uma das estações do ano mais agradáveis, com temperaturas amenas e chuvas.",
        },
    ];
    console.log(data);

    const [estacaoSelecionada, setEstacaoSelecionada] = useState(data[0]);

    function handleEstacaoClick(id) {
        const estacao = data.find((item) => item.id === id);
        setEstacaoSelecionada(estacao);
    }

    return (
        <main className="flex flex-col h-screen font-playwrite-cu bg-[#d2f5cb] italic">
            <header className="animate-dropHeader flex w-full h-32 bg-[#f7fbff] text-[#aaaaaa] font-medium text-xl overflow-hidden">
                <ul className="flex w-full h-full items-center justify-around">
                    {data.map((estacao) => (
                        <li
                            key={estacao.id}
                            className="border-2 p-4 rounded-2xl hover:border-[#8bfd74] bg-[#d2f5cb] border-[#d2f5cb]"
                        >
                            <button
                                onClick={() => handleEstacaoClick(estacao.id)}
                            >
                                {estacao.titulo}
                            </button>
                        </li>
                    ))}
                </ul>
            </header>
            <section className="flex flex-col w-full h-full bg-[#e3ece2] items-center justify-around">
                <Swiper
                    effect={"coverflow"}
                    coverflowEffect={{
                        slideShadows: true,
                    }}
                    pagination={{ clickable: true }}
                    className="w-[700px] h-[350px] rounded-xl"
                >
                    <SwiperSlide>
                        <img
                            src={estacaoSelecionada.image}
                            alt={estacaoSelecionada.titulo}
                            className="w-full h-full object-cover"
                        />
                    </SwiperSlide>
                </Swiper>
                <article className="flex flex-col items-center justify-center">
                    <h1 className="text-3xl">{estacaoSelecionada.titulo}</h1>
                    <p className="text-lg mt-4">{estacaoSelecionada.text}</p>
                </article>
            </section>
        </main>
    );
};

export default HomePage;
