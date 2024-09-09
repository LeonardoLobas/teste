const HomePage = () => {
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
            <section className="flex w-full h-full bg-[#d2f5cb]"></section>
        </main>
    );
};

export default HomePage;
