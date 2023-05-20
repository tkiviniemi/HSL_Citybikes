import { Request, Response } from 'express';
import prisma from '../db/connection';

const getJourneys = async (req: Request, res: Response) => {
  try {
    const journeyData = await prisma.journeys.findMany({
      take: 10,
    });

    res.status(200).json({ journeyData });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export { getJourneys };
