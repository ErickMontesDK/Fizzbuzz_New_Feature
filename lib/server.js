const ExplorerController= require("./controllers/ExplorerController");

const express= require("express");
const app = express();
const port=3000;
app.use(express.json());

app.get("/", (req,res)=>{
    res.json({message: "FizzBuzz Api welcome!"});
});

app.get("/v1/explorers/:mission", (req, res)=>{
    const mission = req.params.mission;
    const explorersInMission=ExplorerController.getExplorersByMission(mission);
    res.json(explorersInMission);
});

app.get("/v1/explorers/amount/:mission",(req,res)=>{
    const mission=req.params.mission;
    const AmountExplorers=ExplorerController.getExplorersAmountByMission(mission);
    res.json({mission:mission,quantity: AmountExplorers});
});

app.get("/v1/explorers/usernames/:mission",(req,res)=>{
    const mission=req.params.mission;
    const ArrayUsernames=ExplorerController.getExplorersUsernamesByMission(mission);
    res.json(ArrayUsernames);
});

app.get("/v1/fizzbuzz/:score",(req,res)=>{
    const score=req.params.score;
    const trick=ExplorerController.getScoreNumber(score);

    res.json({score:score, trick:trick});
});

app.listen(port,()=>{
    console.log(`FizzBuzz API in localhost:${port}`);
});