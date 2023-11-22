import { Container, Heading, SimpleGrid, Divider} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'


import threatsImg from '../public/images/works/threats.jpg'
import hackathon1 from '../public/images/works/hackathon1.png'
import reactmenu from '../public/images/works/menu2.png'


const Works = () => (
    <Layout title="Works">
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                My Projects
            </Heading>
             
            <Section delay={0.2}>
                <Divider my={6} />
            </Section>

            <SimpleGrid columns={[1, 1, 3]} gap={6}>
                <Section delay={0.3}>
                    <WorkGridItem id="menu" title="React Menu" thumbnail={reactmenu}>
                        This project acts as an alternative messaging service
                        while retaining common features. Login via Google/Facebook
                    </WorkGridItem>
                </Section>

                <Section delay={0.3}>
                    <WorkGridItem id="threats" title="Threats" thumbnail={threatsImg}>
                    This is a social media project developed with Python Django,
                    </WorkGridItem>
                </Section>

                <Section delay={0.3}>
                    <WorkGridItem id="hackathon" title="Africa's Talking Hackathon Music Player" thumbnail={hackathon1}>
                        Music palyer for Africa&apos;s talking hackathon
                    </WorkGridItem>
                </Section>
                <Section delay={0.3}>
                </Section>
            </SimpleGrid>

            <Section delay={0.4}>
                <Divider my={6} />
                <Heading as="h3" fontSize={20} mb={4}>
                    {/* mmm */}
                </Heading>
            </Section>
        </Container>
    </Layout>
)

export default Works