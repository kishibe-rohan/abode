import Link from 'next/link'
import {Menu,MenuButton,MenuList,MenuItem,IconButton,Flex,Box,Spacer} from '@chakra-ui/react'
import { BsSearch } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi';
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc';

const Navbar = () => (
    <Flex p='2' borderBottom='1px' borderColor="blue.500">
        <Box fontSize='3xl' color='orange.400' fontWeight='bold'>
            <Link href="/" paddingLeft='2'>Abode</Link>
        </Box>
        <Spacer/>
        <Box>
            <Menu>
            <MenuButton as={IconButton} icon={<FcMenu/>} variant="outlined" color='orange.400'/>
            <MenuList>
                <Link href="/" passHref>
                    <MenuItem icon={<FcHome/>}>Home</MenuItem>
                </Link>
                <Link href="/search" passHref>
                    <MenuItem icon={<BsSearch/>}>Search</MenuItem>
                </Link>
                <Link href="/search?purpose=for-sale" passHref>
                    <MenuItem icon={<FcAbout/>}>Buy Property</MenuItem>
                </Link>
                <Link href="/search?purpose=for-rent" passHref>
                    <MenuItem icon={<FiKey/>}>Rent Property</MenuItem>
                </Link>
            </MenuList>
            </Menu>
        </Box>
    </Flex>
)

export default Navbar;