import { useState } from 'react'
import { useRouter } from 'next/router'
import {
    Heading,
    Button,
    Flex,
    Stack,
    Input,
    Textarea,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText
} from '@chakra-ui/react'


const UpdateForm = ({ title, desc, id }) => {
    const [ formDescription, setFormDescription ] = useState({})
    const [ formTitle, setFormTitle ] = useState({})
    const router = useRouter()

    async function updateNote(e) {
        e.preventDefault()

        try {
            fetch(`/api/update/${id}`, {
                method: 'PUT',
                body: JSON.stringify(formTitle)
            }).then(() => {
                router.reload()  
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Flex
            align='center'
            justify='center'
            flexDir='column'
            maxW='container.sm'
            w='100%'
            gap={6}
            mb={8}
      >
        <Heading as='h2' fontSize='lg'>Update Note</Heading>
        <FormControl as='form' onSubmit={updateNote}>
            <Stack spacing={2}>
                <FormLabel htmlFor='text'>Title</FormLabel>
                <Input placeholder={`${title}...`} id='title' type='text' onChange={e => setFormTitle(e.target.value)} />
                {/* <FormLabel htmlFor='text'>Description</FormLabel> */}
                {/* <Textarea placeholder={`${desc}...`} onChange={e => setFormDescription(e.target.value)}  /> */}
                <Button type='submit' colorScheme='teal'>Update Note</Button>

            </Stack>
        </FormControl>
      </Flex>
    )
}

export default UpdateForm