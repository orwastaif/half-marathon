function HouseBlueprint(address,description,owner,size) {
    this.address = address;
    this.date = new Date();
    this.description = description;
    this.owner = owner;
    this.size = size;
    this.buildingSpeed =  0.5;
    this.getDaysToBuild = () => {
        return this.size / this.buildingSpeed

    };
};

let houseBlueprint = new HouseBlueprint ();

function HouseBuilder(address,description,owner,size,roomCount){
    Object.getPrototypeOf(houseBlueprint).constructor.call(this,address,description,owner,size);
    this.roomCount = roomCount;
}

const house = new HouseBuilder('88 Crescent Avenue',
'Spacious town house with wood flooring, 2-car garage, and a back patio.',
'J. Smith',
110,
5);


console.log(house.address);
console.log(house.description);
console.log(house.size);
console.log(house.date.toDateString());
console.log(house.owner);
console.log(house._averageBuildSpeed);
console.log(house.getDaysToBuild());
console.log(house.roomCount);