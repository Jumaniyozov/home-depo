import {HomesMap} from "@/pages/Map.tsx";
import {HomeSearch} from "@/pages/HomeSearch.tsx";


export const Home = () => {
    return (
        <main>
            <div className="flex h-screen w-full bg-gray-50">
                <HomeSearch/>
                <div className="w-6/12 p-6 h-screen overflow-hidden">
                    <div className="w-full h-full">
                        <HomesMap/>
                    </div>
                </div>
            </div>
        </main>
    );
};

