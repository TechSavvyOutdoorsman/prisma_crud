import { useState } from 'react'
import { useRouter } from 'next/router'
import Head from "next/head";
import {
    Box, 
    Heading,
    Text,
    Flex,
    Input, 
    Button,
    Textarea,

} from '@chakra-ui/react'

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default function Movie({ movie }) {
    const router = useRouter()
    const [formData, setFormData] = useState({})


    async function updateMovie(e) {
        e.preventDefault()
        
        const response = await fetch(`/api/movie/${movie.id}`, {
            method: 'PUT',
            body: JSON.stringify(formData)
        })

        const data = await response.json()


        if (data != '') {
            router.reload()
        } else {
            return null
        }

    }


    return (
        <>
            <Head>
                <title>{movie.title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Box>
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
                <Box>
                    <form onSubmit={updateMovie}>
                        <Flex gap={3} flexDir='column' w='100%'>
                            <Input type='text' placeholder='Title' name='title' onChange={e => setFormData({ ...formData, title: e.target.value})} />
                            <Input type='textext' placeholder='Year' name='year' onChange={e => setFormData({ ...formData, year: +e.target.value})} />
                            <Textarea id='' cols='30' rows='10' placeholder='Description' onChange={e => setFormData({ ...formData, description: e.target.value})} />
                            <Input type='text' placeholder='Slug' name='slug' onChange={e => setFormData({ ...formData, slug: e.target.value})} />
                            <Button type='submit' colorScheme='cyan'>Update movie</Button>
                            <Button variant='outline' as='a' href='/' colorScheme='teal'>Back</Button>
                        </Flex>
                    </form>
                </Box>


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