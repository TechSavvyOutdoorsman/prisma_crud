import {
    Flex,
    Heading,
    Text,
    Modal,
    Button,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,  
} from '@chakra-ui/react'
import notes from '../pages/api/notes'

const Modal = ({ title, description, id }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Modal onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{title}</ModalHeader>
                    <ModalBody>
                        {description}
                    </ModalBody>
                    <ModalFooter>
                        <ModalCloseButton />
                    </ModalFooter>
                </ModalContent>


            </Modal>
        </>

    )
}

export default Modal