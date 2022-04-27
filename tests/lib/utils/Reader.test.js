const Reader = require("./../../../lib/utils/Reader");

describe("Probar funcionamiento del lector de archivos Reader.js",() => {
    test("Verificar que lee el archivo",()=>{
        const file=Reader.readJsonFile("explorers.json");

        expect(file).toBeDefined();
    });
});