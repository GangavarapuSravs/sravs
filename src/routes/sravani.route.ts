// routes/languageRoute.ts
import express, { Request, Response } from 'express';
import Language from '../db/models/sravani';

const languageRouter = express.Router();

languageRouter.use(express.json());

languageRouter.get('/id', async (req: Request, res: Response) => {
  try {
    const language = await Language.findAll();
    res.json(language);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

languageRouter.post('/', async (req: Request, res: Response) => {
  const {id, languagename, languagecode} = req.body;

  try {
    const newHospital = await Language.create({id, languagename, languagecode});
    res.status(201).json(newHospital);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});



export default languageRouter;