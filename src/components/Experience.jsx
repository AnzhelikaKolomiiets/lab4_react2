function Experience() {
    return (
        <section className="mb-10 group">
            <h3 className="text-lg font-bold uppercase tracking-wider text-[#1a1a1a]">
               НАВЧАЛЬНІ ПРОЕКТИ
            </h3>
            {/* Товста лінія з анімацією кольору */}
            <div className="h-1 bg-[#3e2f28] mt-1 mb-5 w-full group-hover:bg-[#9f8579] transition-colors duration-300"></div>

            <div className="flex gap-4 hover:translate-x-1 transition-transform cursor-default">
                <span className="font-bold min-w-[90px] text-sm text-[#1a1a1a]">2024 - н.ч.</span>
                <div>
                    <strong className="text-md block text-[#1a1a1a]">Навчальні проекти</strong>
                    <p className="text-sm text-gray-600 leading-relaxed italic">
                        Розробка інтерфейсів на React та HTML/CSS. Робота з базами даних SQL та налаштування середовища розробки.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Experience;