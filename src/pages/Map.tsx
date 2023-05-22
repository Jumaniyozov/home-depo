import {
    YMaps,
    Map,
    Placemark,
} from "@pbe/react-yandex-maps";

export type MapIcon = `islands#${IconColor}${IconBadge}Icon`;

// https://yandex.ru/dev/maps/jsapi/doc/2.1/ref/reference/option.presetStorage.html?lang=ru
type IconColor =
    | "black"
    | "blue"
    | "brown"
    | "darkBlue"
    | "darkGreen"
    | "darkOrange"
    | "gray"
    | "green"
    | "lightBlue"
    | "night"
    | "olive"
    | "orange"
    | "pink"
    | "red"
    | "violet"
    | "yellow";

type IconBadge =
    | "Airport"
    | "Attention"
    | "Auto"
    | "Bar"
    | "Barber"
    | "Beach"
    | "Bicycle"
    | "Bicycle2"
    | "Book"
    | "CarWash"
    | "Christian"
    | "Cinema"
    | "Circus"
    | "Court"
    | "Delivery"
    | "Discount"
    | "Dog"
    | "Education"
    | "EntertainmentCenter"
    | "Factory"
    | "Family"
    | "Fashion"
    | "Food"
    | "FuelStation"
    | "Garden"
    | "Government"
    | "Heart"
    | "Home"
    | "Hotel"
    | "Hydro"
    | "Info"
    | "Laundry"
    | "Leisure"
    | "MassTransit"
    | "Medical"
    | "Money"
    | "Mountain"
    | "NightClub"
    | "Observation"
    | "Park"
    | "Parking"
    | "Person"
    | "Pocket"
    | "Pool"
    | "Post"
    | "Railway"
    | "RapidTransit"
    | "RepairShop"
    | "Run"
    | "Science"
    | "Shopping"
    | "Souvenirs"
    | "Sport"
    | "Star"
    | "Theater"
    | "Toilet"
    | "Underpass"
    | "Vegetation"
    | "Video"
    | "Waste"
    | "WaterPark"
    | "Waterway"
    | "Worship"
    | "Zoo"

    // Other
    | "CircleDot"
    | "Dot";

const placemarks = () => {
    const arr = new Array(50).fill(0).map(() => {
        const lattitude = ((Math.random() * 100) / 30).toFixed(2).replace(".", "");
        const longitude = ((Math.random() * 100) / 30).toFixed(2).replace(".", "");
        return [`41.${lattitude}`, `69.${longitude}`];
    });
    return arr;
};

export const HomesMap = () => {
    const defaultState = {
        center: [41.319592, 69.254302],
        zoom: 12,
    };

    return (
        <YMaps>
            <Map
                className="h-full w-full rounded-lg overflow-hidden"
                defaultState={defaultState}
                modules={["geolocation", "geocode"]}
            >
                {placemarks().map((el) => (
                    <Placemark
                        key={el[0]}
                        geometry={el}
                        modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
                        options={{
                            preset: `islands#redHomeIcon`,
                            // preset: `islands#${IconColor}${IconBadge}Icon`
                        }}
                    />
                ))}
            </Map>
        </YMaps>
    );
};
