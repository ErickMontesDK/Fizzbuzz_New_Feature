const FizzbuzzService=require("../../../lib/services/FizzbuzzService");

describe("Verificar funcionamiento de FizzbuzzService",()=>{
    test("1-Si explorer.score es divisible de 5 y 3, explorer.trick=\"FIZZBUZZ\"",()=>{
        const explorer=FizzbuzzService.applyValidationInExplorer({score:15});

        expect(explorer.trick).toBe("FIZZBUZZ");
    });
    test("2-Si explorer.score es divisible de 3, explorer.trick=\"FIZZ\"",()=>{
        const explorer=FizzbuzzService.applyValidationInExplorer({score:9});

        expect(explorer.trick).toBe("FIZZ");
    });
    test("3-Si explorer.score es divisible de 5, explorer.trick=\"BUZZ\"",()=>{
        const explorer=FizzbuzzService.applyValidationInExplorer({score:10});

        expect(explorer.trick).toBe("BUZZ");
    });
    test("4-Si explorer.score no es divisible de 5 o 3, explorer.trick=explorer.score",()=>{
        const scoreSend={score:4};
        const explorer=FizzbuzzService.applyValidationInExplorer(scoreSend);

        expect(explorer.trick).toEqual(scoreSend.score);
    });

    test("5-Si el number enviado es divisible de 5 y 3, explorer.trick=\"FIZZBUZZ\"",()=>{
        const trick=FizzbuzzService.applyValidationInNumber(15);

        expect(trick).toBe("FIZZBUZZ");
    });
    test("6-Si el number enviado es divisible de 3, explorer.trick=\"FIZZ\"",()=>{
        const trick=FizzbuzzService.applyValidationInNumber(9);

        expect(trick).toBe("FIZZ");
    });
    test("7-Si el number enviado es divisible de 5, explorer.trick=\"BUZZ\"",()=>{
        const trick=FizzbuzzService.applyValidationInNumber(10);

        expect(trick).toBe("BUZZ");
    });
    test("8-Si el number enviado no es divisible de 5 o 3, explorer.trick=explorer.score",()=>{
        const trick=FizzbuzzService.applyValidationInNumber(2);

        expect(trick).toEqual(2);
    });
});