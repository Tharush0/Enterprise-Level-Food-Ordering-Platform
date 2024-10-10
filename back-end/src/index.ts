import express, {Request, Response} from 'express';
import cors from 'cors';
import "dotenv/config";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/test", async (req: Request, res: Response) => {
    res.json({ message: "Hello World!" });
});

app.listen(8000, () => {
    console.log("Server is running on port 8000🔥");
})