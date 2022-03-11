import { useState } from 'react'
import { useRouter } from 'next/router'

import {
    Box, 
    Heading, 
    Text, 
    Input, 
    Textarea,
    Button,
    Flex,

} from '@chakra-ui/react'
import Layout from '../components/layouts/Main'


const Create = () => {
    const [formData, setFormData] = useState({})
    const router = useRouter()

    async function saveMovie(e)  {
        e.preventDefault()
        
        const response = await fetch('/api/movies', {
            method: 'POST',
            body: JSON.stringify(formData)
        })

        const data = await response.json()


        if (data !== '') {
            return (
                router.push('/')
                )
        } else {
            return null
        }


    }
 
    return (
        <Layout>
            <Box mt={5} p={3}>
                <Heading mb={5} as='h1' fontSize='lg'>Create a New Movie</Heading>
                <form onSubmit={saveMovie}>
                    <Flex gap={3} flexDir='column' w='100%'>
                        <Input type='text' placeholder='Title' name='title' onChange={e => setFormData({ ...formData, title: e.target.value})} />
                        <Input type='textext' placeholder='Year' name='year' onChange={e => setFormData({ ...formData, year: +e.target.value})} />
                        <Textarea id='' cols='30' rows='10' placeholder='Description' onChange={e => setFormData({ ...formData, description: e.target.value})} />
                        <Input type='text' placeholder='Slug' name='slug' onChange={e => setFormData({ ...formData, slug: e.target.value})} />
                        <Button type='submit' colorScheme='cyan'>Add movie</Button>
                        <Button variant='outline' as='a' href='/' colorScheme='teal'>Back</Button>
                    </Flex>
                </form>

            </Box>
        </Layout>
    )

}


export default Create 


