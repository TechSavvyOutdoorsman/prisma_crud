import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handle(req, res) {
    const data = JSON.parse(req.body)

    const createdNote = await prisma.note.create({
        data
    })

    res.json(createdNote)
   
}