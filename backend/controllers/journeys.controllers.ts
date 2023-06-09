import { Request, Response } from 'express';
import prisma from '../db/connection';

const getJourneys = async (req: Request, res: Response) => {
  try {
    const { page, limit, sortOrder } = req.query;
    const sortKey: string = req.query.sortKey as string;

    const journeyData = await prisma.journeys.findMany({
      skip: Number(page) * Number(limit) - Number(limit) || 0,
      take: Number(limit) || 10,
      orderBy: {
        [sortKey || 'id']: sortOrder || 'asc',
      },
    });

    res.status(200).json({ journeyData });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export { getJourneys };
