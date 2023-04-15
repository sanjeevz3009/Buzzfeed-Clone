import express, { Request, Response } from 'express';
import axios, { AxiosResponse } from 'axios';
import { QuizData } from './interfaces';
import * as dotenv from 'dotenv';
dotenv.config();

const PORT = 8000;
const app = express();

app.get('/quiz-item', async (req: Request, res: Response) => {
    try {
        const response: AxiosResponse = await axios.get(process.env.URL as string, {
            headers: {
                'X-Cassandra-Token': process.env.TOKEN,
                accept: 'application/json'
            }
        });
        if (response.status === 200) {
            const quizItem: QuizData = await response.data.data['ab4c512d-8498-4324-9f57-e03d60e159ba'];
            res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
            res.send(quizItem);
        }
    } catch (err) {
        console.error(err);
    }
})

app.listen(PORT, () => console.log('Server is running on port ' + PORT));
