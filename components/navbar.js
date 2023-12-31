import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import ThemeToggleButton from './theme-toggle-button';

const LinkItem = ({ href, path, _target, children, ...props }) => {
  const active = path === href
  const inactiveColour = useColorModeValue('gray200', 'whiteAlpha.900')
  return(
      <NextLink href={href} passHref>
          <Link
              p={2}
              bg={active ? 'pinkyPink' : undefined}
              color={active ? 'gray' : inactiveColour}
              _target={_target}
              {...props}
          >
              {children}
          </Link>
      </NextLink>
  )
}

const Navbar = props => {
  const {path} = props
  return(
      <Box
        position="fixed"
        as="nav"    
        w="100%"
        bg={useColorModeValue('#fffff40', '#20202380')}
        style={{backdropFilter: 'blur(10px)'}}
        zIndex={1}
        {...props}
      >
        <Container
          display="flex"
          p={2}
          maxW="container.md"
          wrap="wrap"
          align="center"
          justify="space-between"
        >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo/>
          </Heading>
        </Flex>
          <Stack
            direction={{base: 'column', md: 'row'}}
            display={{base: 'none', md: 'flex'}}
            width={{base: 'full', md: 'auto'}}
            alignItems="center"
            flexGrow={1}
            mt={{base: 4, md: 0}}
          >
            <LinkItem href="/works" path={path}>
              projects
            </LinkItem>
            <LinkItem href="/cv" path={path}>
              CV
            </LinkItem>
            <LinkItem 
              _target="_blank"
              href="https://github.com/jck-bit" 
              path={path}
              display="inline-flex"
              alignItems="center"
              style={{ gap: 4}}
              pl={2}
              ><IoLogoGithub/>Github
            </LinkItem>
              <LinkItem 
                _target="_blank"
                href="https://www.linkedin.com/in/jack-kinyanjui-53291624b/" 
                path={path}
                display="inline-flex"
                alignItems="center"
                style={{ gap: 4}}
                pl={2}
              ><IoLogoLinkedin/>LinkedIn
            </LinkItem>
          </Stack>
          <Box flex={1} align="right">
          <ThemeToggleButton />
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList style={{color:"black"}}>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>About</MenuItem>
                </NextLink>
                <NextLink href="/works" passHref>
                  <MenuItem as={Link}>Works</MenuItem>
                </NextLink>
                <MenuItem as={Link} href="https://github.com/jck-bit">
                  Github
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar