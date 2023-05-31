import { Request, Response } from 'express';
import prisma from '../db/connection';

const getStations = async (req: Request, res: Response) => {
  try {
    const { page, limit, sortOrder } = req.query;
    const sortKey: string = req.query.sortKey as string;

    const stationData = await prisma.stations.findMany({
      skip: Number(page) * Number(limit) - Number(limit) || 0,
      take: Number(limit) || 10,
      orderBy: {
        [sortKey || 'station_id']: sortOrder || 'asc',
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

    const singleStationData = await prisma.stations.findUniqueOrThrow({
      where: {
        station_id: Number(id),
      },
    });

    const departure_statistics = await prisma.journeys.aggregate({
      where: {
        departure_station_id: Number(id),
      },
      _count: {
        departure_station_id: true,
      },
      _avg: {
        covered_distance: true,
      },
    });

    const return_statistics = await prisma.journeys.aggregate({
      where: {
        return_station_id: Number(id),
      },
      _count: {
        return_station_id: true,
      },
      _avg: {
        covered_distance: true,
      },
    });

    const stationData = {
      ...singleStationData,
      departure_statistics,
      return_statistics,
    };

    res.status(200).json({ stationData });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export { getStations, getStationById };
