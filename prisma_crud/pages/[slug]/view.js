import Head from "next/head";
import {
    Box, 
    Heading,
    Text,
    Flex,

} from '@chakra-ui/react'

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default function Movie({ movie }) {
    return (
        <>
            <Head>
                <title>{movie.title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Box pt={5}>
                <Flex mt={5} flexDir='column' align='center'>
                    <Heading mb={10} as='h1' fontSize='xl'>More about {movie.title}</Heading>
                    <Flex flexDir='column'>
                        <Heading as='h2' fontSize='lg'>{movie.title}</Heading>
                        <Heading mb={3} as='h4' fontSize='sm' fontStyle='italic'>{movie.year}</Heading>
                        <Text as='p' fontSize='md'>{movie.description}</Text>
                    </Flex>
                </Flex>
            </Box>
        </>
    );
}

export async function getServerSideProps(context) {
    const {slug} = context.query

    const movie = await prisma.movie.findFirst({
        where: {
            slug: slug
        }
    })

    return {
        props: {
            movie
        }
    }
}