import { useState } from 'react'
import { 
  Text, 
  Heading, 
  Flex,
  Box,
  Button,
  Input
} from '@chakra-ui/react'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import Layout from '../components/layouts/Main'



export default function Home({ data }) {

  const [movies, setMovies ] = useState(data)

  return (
    <Layout>
      <Flex align='center' justify='center' flexDir='column'>
        <Flex mt={5} flexDir='column' align='center' align='center'>
          <Heading mb={5} as='h1' justify='center'>This is a Prisma Crud App with Sqlite</Heading>
          <Flex mb={5} gap={3}>
            <Input w='100%' placeholder='Search...' ></Input>
            <Button w='100%' href='/create' target='_self' as='a' colorScheme='teal'>Create New Movie</Button>
          </Flex>
        </Flex>
        <Flex>
          <ul>
            {movies.map(item => (
              <li key={item.id} style={{ listStyle: 'none'}}>
                <Box m={3} p={2} borderRadius='md' background='whiteAlpha.500'>
                  <Heading as='h3' fontSize='md'>{item.title}</Heading>
                  <Box mt={2}>
                    <Text as='p' fontSize='xs' fontStyle='italic'>{item.year}</Text>
                    <Text as='p' fontSize='sm'>{item.description}</Text>
                  </Box>
                  <Flex gap={3} mt={2}>
                    <Button variant='ghost' colorScheme='blue' as='a' href='' target="_self">Edit</Button>
                    <Button variant='outline' colorScheme='red' as='a' href='' target="_self">Delete</Button>
                  </Flex>
                </Box>
              </li>
            ))}
          </ul>
        </Flex>
      </Flex>
    </Layout>
  )
}


export async function getServerSideProps() {

  let movies = await prisma.movie.findMany()

  return {
    props: {
      data: movies
    }
  }

}

