import {ChangeEvent, useState} from 'react';
import {MagnifyingGlassIcon} from "@heroicons/react/24/outline";
import {Link} from "react-router-dom";
import {houseGenerate} from "@/utils/houseGenerator.ts";


const houses = houseGenerate(50);

export const HomeSearch = () => {
    const [houseFilter, setHouseFilter] = useState<string | null>(null);


    let filteredHouses = houses;

    const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
        setHouseFilter(evt.target.value);
    }

    if (houseFilter !== null) {
        filteredHouses = filteredHouses.filter((el) => el.header.includes(houseFilter))
    }
    return (
        <div className="w-6/12 p-8 h-screen ">
            <div className="flex flex-col bg-white rounded-lg h-full w-full p-6 gap-4">
                <div>
                    <h1 className="text-2xl text-gray-900 font-medium">Uy izlash</h1>
                </div>
                <div>
                    <div className="relative mt-2 rounded-md shadow-sm">
                        <input
                            onChange={handleChange}
                            type="text"
                            name="uy-izlash"
                            id="uy-izlash"
                            className="block w-full rounded-md border-0 py-1.5 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Uy izlash..."
                        />
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true"/>
                        </div>
                    </div>
                </div>
                <div className="h-full flex overflow-hidden">
                    <ul className="overflow-y-auto flex-1 px-4">
                        {
                            filteredHouses.map((el) => (
                                <li key={el.id}>
                                    <Link
                                        className="my-4 flex rounded-lg overflow-hidden border shadow-sm cursor-pointer h-36"
                                        to="/details">
                                        <div className="flex w-3/12 h-full">
                                            <img src={el.source}
                                                 alt="house photo"/>
                                        </div>
                                        <div className="flex flex-col w-9/12 text-sm px-4 py-4 gap-4">
                                            <h1 className="font-medium font-montserrat text-lg">{el.header}</h1>
                                            <p>{el.description}</p>
                                        </div>
                                    </Link>
                                </li>
                            ))
                        }

                    </ul>
                </div>
            </div>
        </div>
    );
};

