function aboutCar(manufacturer:string, modelName:string, ...additionalInfo){
    const car = {manufacturer, modelName, ...Object.fromEntries
        (additionalInfo)};
    return car;
};

const myCar = aboutCar("Toyota","Corolla",['color','blue'],['year',2024]);

console.log(myCar);