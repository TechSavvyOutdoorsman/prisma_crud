import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async(req, res) => {
    const data = JSON.parse(req.body)

    const createdMovie = await prisma.movie.create({
        data
    })

    res.json(createdMovie)
}



// export default async(req, res) => {
//     const data = JSON.parse(req.body)

//     const updatedMovie = await prisma.movie.update({
//         data
//     })

//     res.json(updatedMovie)
// }


