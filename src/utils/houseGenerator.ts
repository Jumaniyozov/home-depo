const districts = [
    "Bektemir tumani",
    "Mirobod tumani",
    "Mirzo Ulug‘bek tumani",
    "Sergeli tumani",
    "Olmazor tumani",
    "Uchtepa tumani",
    "Shayxontohur tumani",
    "Yashnobod tumani",
    "Chilonzor tumani",
    "Yunusobod tumani",
    "Yakkasaroy tumani",
]

const rooms = [1, 2, 3, 4];

export const houseGenerate = (numOfHouses: number) => {
    const houses: {
        id: number;
        header: string;
        description: string;
        source: string;
    }[] = [];

    for (let houseNum = 0; houseNum <= numOfHouses; houseNum++) {
        const house = {
            id: houseNum,
            header: `${Math.floor(Math.random() * rooms.length) + 1} xonali uy ${districts[Math.floor(Math.random() * districts.length) + 1]}`,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, optio?",
            source: `https://source.unsplash.com/random/200x200/?house,${houseNum + 1}`,
        }
        houses.push(house)
    }

    return houses;
}
