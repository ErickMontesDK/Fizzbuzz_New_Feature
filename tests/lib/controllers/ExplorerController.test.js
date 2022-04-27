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

    test("4-Regresa valor trick dependiendo del score enviado",()=>{
        const trickScore5=ExplorerController.getScoreNumber(5);
        const trickScore3=ExplorerController.getScoreNumber(3);
        const trickScore5n3=ExplorerController.getScoreNumber(15);
        const trickScoreOther=ExplorerController.getScoreNumber(2);

        expect(trickScore5).toBe("BUZZ");
        expect(trickScore3).toBe("FIZZ");
        expect(trickScore5n3).toBe("FIZZBUZZ");
        expect(trickScoreOther).toBe(2);
    });
});