import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()



export default async function handler(req, res){

	const movieId = req.query.id
    const movieBody = JSON.parse(req.body)

	if(req.method === 'DELETE') {
		const movie = await prisma.movie.delete({
			where: {id: movieId}
		})
		res.json(movie)
	} else if (req.method === 'PUT') {
        const updatedMovie = await prisma.movie.update({
            where: 
                { id: movieId },
                data: movieBody 
        })
        res.json(updatedMovie)

    } else {
        console.log("Note could not be created");
    }
}

