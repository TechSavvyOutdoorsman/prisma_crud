import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient() 

export default async function handle(req, res){
    const noteId = req.query.id
    if ( req.method === 'DELETE') {
        await prisma.note.delete({
            where: {
                id: noteId
            }
        })
        res.json({ message: `Note ${noteId} deleted` })
    } else { 
        throw new Error(
            `The HTTP ${req.method} method is not supported at this route.`
        )
    }
}