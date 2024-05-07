const Component1 = ({fitur, model}) => {
    

    return (
        <div className="flex justify-center pt-5 px-5 flex-col gap-5">
            <div className="w-full border-2 shadow-lg text-black p-5 rounded-lg flex flex-col gap-5">
                {
                    model.map((data, index) => (
                        <div key={index} className="flex justify-between font-semibold">
                            <p>{data.title}</p>
                            <p>{data.price}</p>
                        </div>
                    ))
                }


                <div className="border-t border-2 shadow-md bg-gradient-to-r from-blue-900 to-slate-900 text-white rounded-lg text-center p-2">
                    <p><i>Noted :</i></p>
                    {
                        fitur[0].noted.map((data, index) => (
                            <p key={index}><i>{data.name} {data.price}</i></p>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Component1;