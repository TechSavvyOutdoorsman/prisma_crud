import Head from 'next/head'
import { Children } from 'react'
import {
    Box,
    Heading,
    Text
} from '@chakra-ui/react'


const Layout = ({ children }) => {


    return (
        <>
          <Head>
              <title>Prisma Crud App</title>
          </Head>  

            <Box maxW='container.lg'>
                {children}
            </Box>

        </>
    )
}


export default Layout