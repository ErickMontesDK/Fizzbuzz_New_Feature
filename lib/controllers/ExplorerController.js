const ExplorerService = require("./../services/ExplorerService");
const Reader = require("./../utils/Reader");
const FizzbuzzService=require("./../services/FizzbuzzService");

const path="explorers.json";

class ExplorerController{
    static getExplorersByMission(mission){
        const FileExplorers=Reader.readJsonFile(path);

        const filteredlistExplorers=ExplorerService.filterByMission(FileExplorers,mission);
        return filteredlistExplorers;
    }
    static getExplorersUsernamesByMission(mission){
        const FileExplorers=Reader.readJsonFile(path);
        
        const ArrayExplorers=ExplorerService.getExplorersUsernamesByMission(FileExplorers,mission);
        return ArrayExplorers;
    }
    static getExplorersAmountByMission(mission){
        const FileExplorers=Reader.readJsonFile(path);

        const AmountExplorers=ExplorerService.getAmountOfExplorersByMission(FileExplorers,mission);
        return AmountExplorers;
    }
    static getScoreNumber(score){
        const trick=FizzbuzzService.applyValidationInNumber(score);
        return trick;
    }
}

module.exports = ExplorerController;
