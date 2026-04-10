function Photo() {
    return (
        <div className="flex justify-center -mt-55 mb-8">
            <img
                src="/IMG_96862.jpg" // Вкажи точну назву, яку бачиш у папці
                alt="Anzhelika Kolomiiets"
                className="w-[200px] h-[250px] rounded-[10px] border-4 border-white object-cover shadow-lg transform hover:scale-105 transition-transform duration-300 bg-gray-100"
            />
        </div>
    );
}

export default Photo;