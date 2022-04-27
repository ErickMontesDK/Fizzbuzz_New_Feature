const ExplorerController = require("./../../../lib/controllers/ExplorerController");

describe("ExplorerController envía la data requerida",() =>{
    test("1-Envia lista filtrada de Explorers",()=>{
        const filteredlistExplorers=ExplorerController.getExplorersByMission("node");
        const checkAllNode=filteredlistExplorers.every((explorer)=> explorer.mission=="node");
        
        expect(checkAllNode).toBe(true);
    });

    test("2-Regresa un array con los usernames de los Explorers filtrados",()=>{
        const filteredlistExplorers=ExplorerController.getExplorersByMission("node");
        const UsernamesArray=ExplorerController.getExplorersUsernamesByMission("node");
        
        for (let i=0; i< filteredlistExplorers.length; i++){
            expect(filteredlistExplorers[i].githubUsername).toEqual(UsernamesArray[i]);
        }
    });

    test("3-Regresa el número de Explorers filtrados",()=>{
        const filteredlistExplorers=ExplorerController.getExplorersByMission("node");
        const numberExplorers=ExplorerController.getExplorersAmountByMission("node");

        expect(numberExplorers).toEqual(filteredlistExplorers.length);
    });
});