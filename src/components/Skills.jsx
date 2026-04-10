function Skills() {
    const list = ["OSINT", "Бази даних (SQL)", "HTML / CSS", "Веб-дизайн", ];
    return (
        <section className="mb-8">
            <h3 className="text-lg font-bold uppercase tracking-wider text-[#1a1a1a]">Навички</h3>
            <div className="h-1 bg-[#3e2f28] mt-1 mb-4 w-full"></div>
            <ul className="text-sm space-y-1">
                {list.map(s => <li key={s}>• {s}</li>)}
            </ul>
        </section>
    );
}
export default Skills;