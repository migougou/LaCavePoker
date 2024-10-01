"use client"
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const cardPrices = await prisma.cardPrice.findMany({
        orderBy: {
          id: 'asc',
        },
      })
      res.status(200).json(cardPrices)
    } catch (error) {
      res.status(500).json({ error: 'Erreur lors de la récupération des données' })
    } finally {
      await prisma.$disconnect()
    }
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}