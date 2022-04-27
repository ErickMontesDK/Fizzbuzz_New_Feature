const ExplorerService=require("../../../lib/services/ExplorerService");

const Explorers=[
    {githubUsername:"User1",mission:"Node"},
    {githubUsername:"User2",mission:"Java"},
    {githubUsername:"User3",mission:"Node"},
    {githubUsername:"User4",mission:"Node"},
    {githubUsername:"User5",mission:"Java"},
    {githubUsername:"User6",mission:"Node"},
    {githubUsername:"User7",mission:"Node"},
    {githubUsername:"User8",mission:"Java"},
    {githubUsername:"User9",mission:"Node"},
    {githubUsername:"User10",mission:"Node"}
];

describe("Respuesta de ExplorerService", () => {
    test("1-Filtra los datos",() => {
        const filtered=ExplorerService.filterByMission(Explorers,"Node");
        const ExplorersNode=[
            {githubUsername:"User1",mission:"Node"},
            {githubUsername:"User3",mission:"Node"},
            {githubUsername:"User4",mission:"Node"},
            {githubUsername:"User6",mission:"Node"},
            {githubUsername:"User7",mission:"Node"},
            {githubUsername:"User9",mission:"Node"},
            {githubUsername:"User10",mission:"Node"}
        ];

        expect(filtered).toEqual(ExplorersNode);
    });
    test("2-Devuelve la cantidad de Explorers con la misma mission", () => {
        const Cant=ExplorerService.getAmountOfExplorersByMission(Explorers,"Node");

        expect(Cant).toBe(7);
    });
    test("3-Devuelve el Usuario de los Explorers con la misma mission", () => {
        const UserList=ExplorerService.getExplorersUsernamesByMission(Explorers,"Node");
        const List=["User1","User3","User4","User6","User7","User9","User10"];
        
        expect(UserList.length).toBe(7);
        expect(UserList).toEqual(List);
    });
});