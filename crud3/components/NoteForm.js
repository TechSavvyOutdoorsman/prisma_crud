import { useState } from 'react'
import { useRouter } from 'next/router'
import {
    Heading,
    Button,
    Flex,
    useToast,
    Stack,
    Input,
    Textarea,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText
} from '@chakra-ui/react'

const NoteForm = () => {
    const [ formData, setFormData ] = useState({})
    const router = useRouter()
    const toast = useToast()

    async function saveNote(e) {
        e.preventDefault()

        // const response = await fetch('api/create', {
        //     method: 'POST', 
        //     body: JSON.stringify(formData)
        // })
        
        // const data = await response.json()

        // if (data == '') {
        //     return (
        //         router.push('/')
        //     ) 
        // } else {
        //     return null
        // }

        try {
            fetch('api/create', {
                method: 'POST',
                body: JSON.stringify(formData)
            }).then(() => {
                router.reload()  
            }).then(() => {
                toast({
                    title: 'Note Created.',
                    description: "We've added your note to the list.",
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                })
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
        <Heading as='h2' fontSize='lg'>Create New Note</Heading>
        <FormControl as='form' onSubmit={saveNote}>
            <Stack spacing={2}>
                <FormLabel htmlFor='text' >Title</FormLabel>
                <Input placeholder='Lunch on Friday' id='title' type='text' onChange={e => setFormData({ ...formData, title: e.target.value })} />
                <FormLabel htmlFor='text'>Description</FormLabel>
                <Textarea placeholder='Meet Joe at Pilaggio&apos;s at 12...' onChange={e => setFormData({ ...formData, description: e.target.value })}  />
                <Button type='submit' colorScheme='teal'>Add Note</Button>
            </Stack>
        </FormControl>
      </Flex>
    )
}

export default NoteForm

