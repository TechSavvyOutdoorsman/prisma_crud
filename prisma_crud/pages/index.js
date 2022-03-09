import { 
  Text, 
  Heading, 
  Flex,

} from '@chakra-ui/react'
import Layout from '../components/layouts/Main'



export default function Home() {
  return (
    <Layout>
      <Flex align='center' justify='center' flexDir='column'>
        <Flex mt={5} flexDir='column' align='center' align='center'>
          <Heading as='h1' justify='center'>This is a Prisma Crud App with Sqlite</Heading>
        </Flex>
        <Flex>

        </Flex>
      </Flex>
    </Layout>
  )
}


