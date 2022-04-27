const Reader = require("./lib/utils/Reader");
const ExplorerService=require("./lib/services/ExplorerService");
const FizzbuzzService=require("./lib/services/FizzbuzzService");

const explorers = Reader.readJsonFile("explorers.json"); // esto regresa la lista de explorers del archivo
//console.log(explorers);

// Aplicación del ExplorerService sobre la lista de explorers
const explorersInNode=ExplorerService.filterByMission(explorers, "node");
const NumberExplorersInNode=ExplorerService.getAmountOfExplorersByMission(explorers, "node");
const UsernamesExplorersInNode=ExplorerService.getExplorersUsernamesByMission(explorers, "node");

//Get a list of the explorers in node, if the score is divisible by 5 and 3, set the property trick and the value FIZZBUZZ, if is just divisible by 5 set the property trcik and the value BUZZ, if is just divisible by 3 set the property trick and the value FIZZ, otherwise set the property trick and the score value. 
const explorersInNodeAndFizzTrick = explorersInNode.map((explorer) => FizzbuzzService.applyValidationInExplorer(explorer));
console.log(explorersInNodeAndFizzTrick);

console.log("El número de Explorers en Node son: "+NumberExplorersInNode);
console.log("Los usurnames de quienes están en Node son:\n"+UsernamesExplorersInNode);