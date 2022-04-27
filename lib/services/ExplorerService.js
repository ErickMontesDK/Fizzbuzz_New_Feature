class ExplorerService{
    static filterByMission(explorers,mission) {
        return explorers.filter((explorer) => explorer.mission==mission);
    }
    
    static getAmountOfExplorersByMission(explorers,mission) {
        const explorersInMission=explorers.filter((explorer) => explorer.mission==mission);
        return explorersInMission.length;
    }
    static getExplorersUsernamesByMission(explorers,mission) {
        const explorersInMission=explorers.filter((explorer) => explorer.mission==mission);
        return explorersInMission.map((explorer)=>explorer.githubUsername);
    }
}
module.exports = ExplorerService;