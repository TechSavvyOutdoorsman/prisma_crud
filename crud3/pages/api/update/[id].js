import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function handle(req, res){
    const noteId = req.query.id
    const noteDataTitle = JSON.parse(req.body)
    // const noteDataDescription = JSON.parse(req.body.description)
    if ( req.method === 'PUT') {
      const updatedNote = await prisma.note.update({
            where: { id: noteId },
            data: {
                title: noteDataTitle
            }
        })
        res.json(updatedNote)
    } else { 
        throw new Error (
            `The HTTP ${req.method} method is not supported at this route.`
        )
    }
}


