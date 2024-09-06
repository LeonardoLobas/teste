const HomePage = () => {
    return (
        <main className="flex font-serif">
            <header className="flex w-full h-32 font-bold text-xl">
                <ul className="flex w-full bg-[#fff4ce] border-b-2 border-[#ffa492] h-full items-center justify-around ">
                    <li className="border-4 p-4 rounded-2xl hover:border-[#ff7f81] bg-[#ffa492] border-[#ffa492] ">
                        <a href="">Primavera</a>
                    </li>
                    <li className="border-4 p-4 rounded-2xl hover:border-[#ff7f81] bg-[#ffa492] border-[#ffa492]">
                        <a href="">Verão</a>
                    </li>
                    <li className="border-4 p-4 rounded-2xl hover:border-[#ff7f81] bg-[#ffa492] border-[#ffa492]">
                        <a href="">Outono</a>
                    </li>
                </ul>
            </header>
        </main>
    );
};

export default HomePage;
