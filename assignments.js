// function describeCountry(country,population,capitalCity){
//     console.log(`${country} has ${population} million people and its capital city is ${capitalCity}`);
// }

// const country1 = describeCountry('Poland',39,'Warszawa');
// const country2 = describeCountry('Germany',50,'Berlin');
// const country3 = describeCountry('France',60,'Paris');

// function percentageOfWorld1(population) {
//     const prcOfWorld = (population/7900) * 100;
//     console.log(prcOfWorld);
//     return prcOfWorld;
// }
// percentageOfWorld1(39);
// percentageOfWorld1(50);
// percentageOfWorld1(60);

// const percentageOfWorld2 = function (population) {
//     const prcOfWorld2 = (population/7900) * 100;
//     console.log(prcOfWorld2);
//     return prcOfWorld2;
// }
// const percPoland1 = percentageOfWorld2(39);
// const percGermany1 = percentageOfWorld2(50);
// const percFrance1 = percentageOfWorld2(60);

// const percentageOfWorld3 = population => {
//     return (population/7900) * 100;
// }

// const percPoland3 = percentageOfWorld3(39);
// const percGermany3 = percentageOfWorld3(50);
// const percFrance3 = percentageOfWorld3(60);
// console.log(percPoland3,percGermany3,percFrance3);

// function describePopulation(country,population) {
//     const percentage = percentageOfWorld3(population);
//     const description = `${country} has ${population} million people, which is about ${percentage} of the world`;
//     console.log(description);
// }

// describePopulation('Poland', 39);
// describePopulation('Germany', 50);
// describePopulation('France', 60);

// const populations = [39,50,60,70,'Poland','Germany','France','Spain'];

// console.log(populations.length === 4 ? 'true' : 'false');

// const percentages = [
//     percentageOfWorld3(39),
//     percentageOfWorld3(50),
//     percentageOfWorld3(60),
//     percentageOfWorld3(70)
// ];
// console.log(percentages);