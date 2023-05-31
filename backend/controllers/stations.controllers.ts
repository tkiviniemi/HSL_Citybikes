import e, { Request, Response } from 'express';
import prisma from '../db/connection';
import { Prisma } from '@prisma/client';

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

    if (!Number(id)) {
      return res.status(400).json({ error: 'Invalid ID supplied' });
    }

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
    if (error.code === 'P2025') {
      return res.status(404).json({ error: 'Station not found' });
    }
    res.status(500).json({ message: error.message });
  }
};

export { getStations, getStationById };
