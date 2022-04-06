import { useState } from 'react'
import { useRouter } from 'next/router'
import Layout from '../components/layout'
import NoteForm from '../components/NoteForm'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import {
  Heading,
  Button,
  Text,
  Box,
  Flex,
  useToast,
} from '@chakra-ui/react'




export default function Home({ data }) {
  const [notes, setNotes] = useState(data)
  const router = useRouter()
  const toast = useToast()


  async function deleteNote(id) {
    try {
      fetch(`api/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "DELETE"
      }).then(() => {
        router.reload()
      })
    } catch (error) {
      toast({
        title: 'Note Deleted.',
        description: `Error: ${error}`,
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    }
  }


  // async function readNote(id) {
  //   try {
  //     fetch(`api/${id}`, {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       method: "READ"
  //     })

  //     return (

  //     )
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }


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
      <NoteForm />
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
            <Button as='a' href={`/update/${note.id}`}  colorScheme='gray'>Update</Button>
            <Button onClick={() => deleteNote(note.id)} target='_self' colorScheme='red'>Delete</Button>
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









