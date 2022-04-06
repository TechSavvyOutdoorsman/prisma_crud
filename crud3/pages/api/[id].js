import { PrismaClient } from '@prisma/client'
import { responseSymbol } from 'next/dist/server/web/spec-compliant/fetch-event'

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
    } else if ( req.method === 'READ') {
            const note = await prisma.note.read({
                where: {
                    id: noteId
                }
            })
            res.json(note)
    } else { 
        throw new Error(
            `The HTTP ${req.method} method is not supported at this route.`
        )
    }
}