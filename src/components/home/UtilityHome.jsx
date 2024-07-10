import { CardCar } from "../CardCar";
import { CarData } from "../../data/CarData";
import { useEffect, useState } from "react";
import SkeletonLoading from "../fragments/SkeletonLoading";

export function UtilityHome() {
    const [carData, setCarData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        dataLoading()
    }, [])
    const dataLoading = () => {
        setTimeout(() => {
            setCarData(CarData);
            setIsLoading(false);
        }, 1000);
    }

    return (
        <>
            <div className="w-full flex flex-wrap gap-5 justify-center pt-10 xl:pt-0 xl:text-xl">
                {isLoading ? (
                    <div className="w-full flex flex-wrap gap-5 justify-center pt-10 xl:pt-0 ">
                        <div className="w-72 xl:w-[28%] border rounded-lg p-5">
                            <div>
                                <SkeletonLoading
                                    height={'h-40'}
                                />
                            </div>
                            <div className="flex flex-col items-center gap-2 mt-2">
                                <div>
                                    <SkeletonLoading
                                        height={'h-10'}
                                        width={'w-52 xl:w-72'}
                                    />
                                </div>
                                <div>
                                    <SkeletonLoading
                                        height={'h-10'}
                                        width={'w-60 xl:w-80'}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="w-72 xl:w-[28%] border rounded-lg p-5">
                            <div>
                                <SkeletonLoading
                                    height={'h-40'}
                                />
                            </div>
                            <div className="flex flex-col items-center gap-2 mt-2">
                                <div>
                                    <SkeletonLoading
                                        height={'h-10'}
                                        width={'w-72'}
                                    />
                                </div>
                                <div>
                                    <SkeletonLoading
                                        height={'h-10'}
                                        width={'w-80'}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="w-72 xl:w-[28%] border rounded-lg p-5">
                            <div>
                                <SkeletonLoading
                                    height={'h-40'}
                                />
                            </div>
                            <div className="flex flex-col items-center gap-2 mt-2">
                                <div>
                                    <SkeletonLoading
                                        height={'h-10'}
                                        width={'w-72'}
                                    />
                                </div>
                                <div>
                                    <SkeletonLoading
                                        height={'h-10'}
                                        width={'w-80'}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="w-72 xl:w-[28%] border rounded-lg p-5">
                            <div>
                                <SkeletonLoading
                                    height={'h-40'}
                                />
                            </div>
                            <div className="flex flex-col items-center gap-2 mt-2">
                                <div>
                                    <SkeletonLoading
                                        height={'h-10'}
                                        width={'w-72'}
                                    />
                                </div>
                                <div>
                                    <SkeletonLoading
                                        height={'h-10'}
                                        width={'w-80'}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="w-72 xl:w-[28%] border rounded-lg p-5">
                            <div>
                                <SkeletonLoading
                                    height={'h-40'}
                                />
                            </div>
                            <div className="flex flex-col items-center gap-2 mt-2">
                                <div>
                                    <SkeletonLoading
                                        height={'h-10'}
                                        width={'w-72'}
                                    />
                                </div>
                                <div>
                                    <SkeletonLoading
                                        height={'h-10'}
                                        width={'w-80'}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="w-72 xl:w-[28%] border rounded-lg p-5">
                            <div>
                                <SkeletonLoading
                                    height={'h-40'}
                                />
                            </div>
                            <div className="flex flex-col items-center gap-2 mt-2">
                                <div>
                                    <SkeletonLoading
                                        height={'h-10'}
                                        width={'w-72'}
                                    />
                                </div>
                                <div>
                                    <SkeletonLoading
                                        height={'h-10'}
                                        width={'w-80'}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="w-72 xl:w-[28%] border rounded-lg p-5">
                            <div>
                                <SkeletonLoading
                                    height={'h-40'}
                                />
                            </div>
                            <div className="flex flex-col items-center gap-2 mt-2">
                                <div>
                                    <SkeletonLoading
                                        height={'h-10'}
                                        width={'w-72'}
                                    />
                                </div>
                                <div>
                                    <SkeletonLoading
                                        height={'h-10'}
                                        width={'w-80'}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="w-72 xl:w-[28%] border rounded-lg p-5">
                            <div>
                                <SkeletonLoading
                                    height={'h-40'}
                                />
                            </div>
                            <div className="flex flex-col items-center gap-2 mt-2">
                                <div>
                                    <SkeletonLoading
                                        height={'h-10'}
                                        width={'w-72'}
                                    />
                                </div>
                                <div>
                                    <SkeletonLoading
                                        height={'h-10'}
                                        width={'w-80'}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    carData.map((data) => (
                        <CardCar
                            key={data.id}
                            image={data.image}
                            name={data.name}
                            linkTo={data.link}
                            id={data.id}
                        />
                    ))
                )}
            </div>
        </>
    )
}