import express, { Request, Response } from "express"
import bodyParser from "body-parser";


const app = express();


app.use(bodyParser.json())

//@ts-ignore
app.post("/wagmi", (req: Request, res: Response) => {
    const reqbody = req.body
    try{
    if(Object.keys(reqbody).length === 0){
        return res.json({
            message: "wagmi",
            timestamp: new Date().toISOString(),
            lang: "Node.js"
        })
    }
    }catch(e)
    {
        res.json({
            error: "Invald input"
        })
    }

    const a = reqbody.a;
    const b = reqbody.b

    if(typeof a === 'number' && typeof b === 'number' && a >= 0 && b >= 0){
        const sum = a + b;

        if(sum <= 100){
            return res.json({
                result: sum,
                a: a,
                b: b,
                status: "success"
            })
        }
    }

    return res.json({
        error: "Invald input"
    })
})

app.listen(3000, () => {
  console.log(` Server running at http://localhost:3000`);
});