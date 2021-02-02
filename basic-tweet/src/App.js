import { Avatar, Box, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import { FaShare, FaRetweet, FaHeart} from 'react-icons/fa'
import { HiOutlineDotsHorizontal} from 'react-icons/hi'

const App = () => {
    return (
        <Box borderColor='#ccc' border='1px' w='546px' minH='68px' p='10px' m={2} d='flex' fontSize='14px' lineHeight='18px'>
            <Avatar src='http://www.gravatar.com/avatar/nothing' alt='avatar'/>
           <Box p={1}>
            <Text fontWeight='bold'>Your name 
                <Text as='span' fontWeight='thin'> @your handle</Text>
                <Text as='span' fontWeight='thin' ml='20px'>2h ago</Text>
            </Text>
           
            <Text>This is less than 140 characters long</Text>
           <Box color='gray.400'>
                <Icon as={FaShare} mr={6}/>
                <Icon as={FaRetweet} mr={6}/>
                <Icon  as={FaHeart} mr={6}/>
                <Icon as={HiOutlineDotsHorizontal}/>
           </Box>
           </Box>
        </Box>
    )
}

export default App
 