import { Request, Response } from 'express';
import prisma from '../db/connection';

const getStations = async (req: Request, res: Response) => {
  try {
    const { page, limit, sortOrder } = req.query;
    const sortKey: string = req.query.sortKey as string;

    const stationData = await prisma.stations.findMany({
      skip: Number(page) * Number(limit) - Number(limit),
      take: Number(limit),
      orderBy: {
        [sortKey]: sortOrder,
      },
    });

    res.status(200).json({ stationData });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

const getStationById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const stationData = await prisma.stations.findUniqueOrThrow({
      where: {
        station_id: Number(id),
      },
    });

    res.status(200).json({ stationData });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export { getStations, getStationById };
