import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => (
    <Layout>
        <Container>
            <Title>
                Threats <Badge>2023</Badge>
            </Title>
            <WorkImage
                src="/images/works/threats.jpg"
                alt="threats"
            />
            <P>
              This is a social media project developed with Python Django, allowing users to connect with others,
              share images, update profiles, and manage their content
                <br/><br/>
                used Docker to Facilitate containerization, enabling seamless deployment across various environments.
                open-source relational database management system for efficient data storage.      
            </P>
            <br/>
            <List>
                <ListItem>
                    <Meta>Link</Meta>
                    <Link href="https://github.com/jck-bit/Threats">
                    https://github.com/jck-bit/Threats
                    </Link> <ExternalLinkIcon></ExternalLinkIcon>
                </ListItem>
                <ListItem>
                    <Meta>Platform</Meta>
                    <Link>Web</Link>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <Link>Python | Django | PostgreSQL</Link>
                </ListItem>
                <ListItem>
                    <Meta>Tools</Meta>
                    <Link>Docker | AWS</Link>
                </ListItem>
            </List>
            <br/>
            <WorkImage src="/images/works/threats.jpg"/>
        </Container>
    </Layout>
)

export default Project