const Component4 = ({ selectedCarKeamanan }) => {
    const keamanan = selectedCarKeamanan.fitur.find(car => car.title.toLowerCase() == 'keamanan')
    console.log(keamanan)

    return (
        <div className="w-full justify-center items-center flex flex-col pt-5 px-5 gap-5">
            <div className="">
                <h1 className="text-2xl font-semibold">{keamanan.subtitle}</h1>
            </div>
            {
                keamanan.data.map((data, index) => (
                    <div key={index}>
                        <div className="flex flex-col gap-5 items-center border-2 shadow-md rounded-xl p-5">
                            <h1 className="text-xl font-semibold">{data.title}</h1>
                            <div className="rounded-xl overflow-hidden">
                                <img src={data.image} alt="" className="object-cover" />
                            </div>
                            <p className="">{data.desc}</p>
                        </div>
                    </div>

                ))
            }

        </div>
    )
};

export default Component4;