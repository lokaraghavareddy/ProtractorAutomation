const fs= require('fs')
export class JsonOperations{

    public static readJson(file:string ='./TestData/TestData.json'){
       
        let rawdata = fs.readFileSync(file);
        let data = JSON.parse(rawdata);
        return data
    }
    public static writeJson(jsonObject:any,file:string ='./TestData/TestData.json',){
      let data =JSON.stringify(jsonObject, null, 3)
        fs.writeFileSync(file, data)
    }
}