import express, { Request, Response } from 'express';
import axios, { AxiosResponse } from 'axios';
import { QuizData } from './interfaces';

const PORT = 8000;
const app = express();

app.get('/quiz-item', async (req: Request, res: Response) => {
    try {
        const response: AxiosResponse = await axios.get('https://1ff7d406-cc75-47f4-8497-4c1cc87aa565-europe-west1.apps.astra.datastax.com/api/rest/v2/namespaces/quizzes/collections/quirky_quizzes', {
            headers: {
                'X-Cassandra-Token': 'AstraCS:uobFLeUoChtjgDHFmhKOQGbK:0b26650a266a493084f853975462c476b23dd672623d124f825597a4c2fdaf41',
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
