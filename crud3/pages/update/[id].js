import { useState } from 'react'
import Layout from '../../components/layout'
import UpdateForm from '../../components/UpdateForm'
import {
    Box,
    Flex,
    Text,
    Heading,
    Button
} from '@chakra-ui/react'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const Update = ({ data }) => {
    const [ note, setNote ] = useState(data)

    return (
        <Layout>
            <Flex
                align='center'
                justify='center'
                flexDir='column'
                p={8}
                gap={4}
                mt={8}
                mb={8}
            >
                <Heading as='h1' fontSize='x-large'>Note: {note.title}</Heading>
                <Text as='p' fontSize='md'>{note.description}</Text>
                <Button as='a' href='/'>Back</Button>
                <UpdateForm id={note.id} title={note.title} desc={note.description} />
            </Flex>
        </Layout>
    )
}

export default Update


export async function getServerSideProps(req) {
    const noteId = req.query.id
    const note = await prisma.note.findUnique({
        where: {
            id: noteId,
        }
    })

    return {
        props: {
            data: note
        }
    }
}