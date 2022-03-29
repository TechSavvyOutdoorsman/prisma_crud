import { useState } from 'react'
import Layout from '../components/layout'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import {
  Heading,
  Button,
  Text,
  Box,
  Flex,

} from '@chakra-ui/react'




export default function Home({ data }) {
  const [notes, setNotes] = useState(data)

  async function deleteNote(id) {
    const response = await fetch('/api/notes', {
      method: 'DELETE',
      body: JSON.stringify()
    })
    if (!response.ok) {
      console.log(response)
    }
    return await response.json()
  }



  return (
    <Layout>
      <Flex
        flexDir='column'
        align='center'
        justify='center'
        mt={12}
        mb={6}
      >
        <Heading fontSize='xl' as='h1'>CRUD App - 3rd Edition</Heading>
      </Flex>
      <Flex 
        align='center'
        justify='center'
        flexDir='column'
        gap={6}
      >
        {notes.map(note => (
          <Flex 
            key={note.id}
            justify='center'
            textAlign='left'
            flexDir='column'
            pt={4}
            pb={4}
            pr={8}
            pl={8}
            borderRadius='md'
            border='1px solid cyan'
            maxW='container.sm'
            w='100%'
          >
          <Heading as='h3' fontSize='lg'>{note.title}</Heading>
          <Text as='p' fontSize='sm'>{note.description}</Text>
          <Flex
            gap={2}
            pt={2}
          >
            <Button colorScheme='gray'>Update</Button>
            <Button colorScheme='red'>Delete</Button>
          </Flex>
          </Flex>
        ))}
      </Flex>

    </Layout>
  )
}


export async function getServerSideProps() {
  const notes = await prisma.note.findMany()

  return {
    props: {
      data: notes
    }
  }
}









