import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async (req, res) => {
    if (req.method !== 'DELETE') {
        return res.status(405).json({ message: 'Method not allowed' })
    }

    try {
        const noteData = JSON.parse(req.query.id)
        const deletedNote = await prisma.note.delete({
            id: noteData
        })
        res.status(200).json(deletedNote)
    } catch (err) {
        res.status(400).json({ message: 'Something got fucked up :/'})
    }



    res.json({ message: 'hello world'})
}