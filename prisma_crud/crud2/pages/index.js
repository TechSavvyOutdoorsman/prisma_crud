import { useState } from 'react'
import { 
  Box,
  Heading,
  Text,
  Button,
  Input,
  Flex
} from '@chakra-ui/react'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()



export default function Home({ notes }) {
  // const {notes, setNotes} = useState(data)


  return (
    <Box align='center' minW='100%'>
      <Flex  align='center' flexDir='column' mt={10} mb={10}>
        <Heading as='h1' fontSize='xl'>This is our Note App</Heading>
      </Flex>
      <Flex maxW='container.lg' align='center' gap={3} flexDir='column' mt={10} mb={10}>
        <Heading as='h1' fontSize='xl'>This is our Note App</Heading>
        <Flex gap={3}>
          <Button colorScheme='teal'>Make Note</Button>
          <Input placeholder='Search...'></Input>
        </Flex>
        <Flex flexDir='column' gap={3}>
          <ul>
            {notes.map(note => (
              <li key={note.id} style={{ listStyle: 'none'}}>
                <Box align='left' borderRadius='md' minW='container.sm' bg='whiteAlpha.500' p={3} m={3}>
                  <Heading as='h3' fontSize='lg'>{note.title}</Heading>
                  <Text as='p' fontSize='sm'>{note.Description}</Text>
                </Box>
              </li>
            ))}
          </ul>
        </Flex>
      </Flex>
    </Box>    
  )
}


export async function getServerSideProps() {

  const notes = await prisma.note.findMany()


  return {
    props:  { notes }
  }
}