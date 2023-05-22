import {HomesMap} from "@/pages/Map.tsx";
import {MagnifyingGlassIcon} from "@heroicons/react/24/outline";
import {Link} from "react-router-dom";

const houses = [
    {
        id: 1,
        header: "2 xona Olmazor",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, optio?",
        source: "https://source.unsplash.com/random/200x200/?house",
    },
    {
        id: 2,
        header: "3 xona Yunusobod",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, obcaecati.",
        source: "https://source.unsplash.com/random/200x200/?house"
    },
    {
        id: 3,
        header: "4 xona Yashnaobod",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae distinctio eveniet fuga incidunt repellat. Excepturi.",
        source: "https://source.unsplash.com/random/200x200/?house"
    },
    {
        id: 4,
        header: "2 xona Olmazor",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, optio?",
        source: "https://source.unsplash.com/random/200x200/?house"
    },
    {
        id: 5,
        header: "3 xona Yunusobod",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, obcaecati.",
        source: "https://source.unsplash.com/random/200x200/?house"
    },
    {
        id: 6,
        header: "4 xona Yashnaobod",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae distinctio eveniet fuga incidunt repellat. Excepturi.",
        source: "https://source.unsplash.com/random/200x200/?house"
    },
    {
        id: 7,
        header: "2 xona Olmazor",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, optio?",
        source: "https://source.unsplash.com/random/200x200/?house"
    },
    {
        id: 8,
        header: "3 xona Yunusobod",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, obcaecati.",
        source: "https://source.unsplash.com/random/200x200/?house"
    },
    {
        id: 9,
        header: "4 xona Yashnaobod",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae distinctio eveniet fuga incidunt repellat. Excepturi.",
        source: "https://source.unsplash.com/random/200x200/?house"
    },
]

export const Home = () => {

    return (
        <main>

            <div className="flex h-screen w-full bg-gray-50">
                <div className="w-6/12 p-8 h-screen ">
                    <div className="flex flex-col bg-white rounded-lg h-full w-full p-6 gap-4">
                        <div>
                            <h1 className="text-2xl text-gray-900 font-medium">Uy izlash</h1>
                        </div>
                        <div>
                            <div className="relative mt-2 rounded-md shadow-sm">
                                <input
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
                                    houses.map((el) => (
                                        <li key={el.id}>
                                            <Link
                                                className="my-4 flex rounded-lg overflow-hidden border shadow-sm cursor-pointer h-36"
                                                to="/details">
                                                <div className="flex w-3/12 h-full">
                                                    <img src={`${el.source},${el.id}`}
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
                <div className="w-6/12 p-6 h-screen overflow-hidden">
                    <div className="w-full h-full">
                        <HomesMap/>
                    </div>
                </div>
            </div>
        </main>
    );
};

