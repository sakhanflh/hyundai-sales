const Component3 = ({ selectedCarPerforma }) => {
    const performa = selectedCarPerforma.fitur.find(car => car.title.toLowerCase() == 'performa')
    
    return (
        <div className="w-full justify-center items-center flex flex-col pt-5 px-5 gap-5">
            {
                performa.data.map((data, index) => (
                    <div key={index} className="flex flex-col gap-5 items-center border-2 shadow-md rounded-xl p-5">
                        <h1 className="text-2xl xl:text-3xl font-semibold text-center">{data.title}</h1>
                        <div className="rounded-xl overflow-hidden">
                            <img src={data.image} alt="" className="object-cover" />
                        </div>
                        <div className="">
                            <img src={data.image2} alt="" />
                        </div>
                        <p className="xl:text-xl xl:px-16">{data.desc}</p>
                    </div>

                ))
            }
        </div>
    )
};

export default Component3;