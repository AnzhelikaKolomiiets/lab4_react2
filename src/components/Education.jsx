function Education() {
    return (
        <section className="mb-10 group">
            <h3 className="text-lg font-bold uppercase tracking-wider text-[#1a1a1a]">Освіта</h3>
            <div className="h-1 bg-[#3e2f28] mt-1 mb-5 w-full group-hover:bg-amber-900 transition-colors"></div>
            <div className="flex gap-4 hover:translate-x-1 transition-transform">
                <span className="font-bold min-w-[90px] text-sm text-[#1a1a1a]">2023 - 2027</span>
                <div>
                    <strong className="text-md block text-[#1a1a1a]">Бакалавр "Кібербезпека та захист інформації"</strong>
                    <p className="text-sm text-gray-600 italic">Національний Університет "Львівська Політехніка"</p>
                </div>
            </div>
        </section>
    );
}
export default Education;