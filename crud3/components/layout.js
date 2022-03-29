import Head from 'next/head'
import {
    Box,
    Heading,
    Text,
    Flex,
    Button
} from '@chakra-ui/react'

const Layout = ({ children }) => {

    return (
        <>
        <Head>
            <title>Crud App - 3rd Edition</title>
        </Head>
        <Box p={4}>
            {children}
        </Box>
        </>
    )
}

export default Layout
