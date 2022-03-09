export default async(req, res) => {

    
    const deletedMovie = await prisma.movie.delete({
        where: {
            slug: slug
        }
    })

    res.json(deletedMovie)
}