import Link from 'next/link'

import {
    Container,
    Heading,
    Box,
    Button,
    useColorModeValue
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import { BioSection, BioYear } from '../components/bio'
import { ChevronRightIcon } from '@chakra-ui/icons'

const Page = () => {
    return(
          <Layout>
            <Container>
                <Box borderRadius="lg" 
                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} 
                p={3} 
                mb={6} 
                align="center">
                    To view the project file for this, check out the Github button, 
                    otherwise find my favourite projects in <Link href='/works/'>Works!</Link>
                </Box>
                
                <Box display={{md:'flex'}}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Jack Kinyanjui
                        </Heading>
                        <p>Software Developer ( Python  |  Rust  |  JavaScript )</p>
                    </Box>
                </Box>
                <br/>
                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        About Me:
                    </Heading>
                    <Paragraph>I am a dynamic and versatile software developer with a passion for solving complex problems and crafting elegant solutions. My
                            journey in the world of software development has been marked by a relentless pursuit of knowledge, a commitment to excellence,
                            and an unwavering belief in the power of technology to drive innovation.One of my defining traits as a software developer is my
                            language-agnostic approach.
                    </Paragraph>
                    <Box align="center" my={4}>
                        <Link href="/works">
                            <Button righticon={<ChevronRightIcon/>} color="purple">
                                Resume
                            </Button>
                        </Link>
                    </Box>
                </Section>

                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Biography:
                    </Heading>
                    <BioSection>
                        <BioYear>2019</BioYear>
                        completed My high school Education
                    </BioSection>
                    <br/>
                    <BioSection>
                        <BioYear>2020</BioYear>
                        Began My University Education (sep 2020- Present) at the University of Nairobi
                    </BioSection>
                    <br/>
                    <BioSection>
                        <BioYear>2021</BioYear>
                        Studying Javascript and Python while seeking employment oppurtunities and work.
                        Small works developed in
                    </BioSection>
                    <br/>
                    <BioSection>
                        <BioYear>2022</BioYear>
                        Began working as a Freelancer software Developer, working
                        on a variety of  projects for various clients utilising
                        React, Flask and Django Frameworks
                    </BioSection>
                </Section>
                <br/>
                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        My Achievements:
                    </Heading>
                    <Paragraph>
                        I&apos;d say in University my Final Year Project (FYP) was my biggest
                        as I researched AI vision technology and wrote an algorithm for 
                        a self driving car to detect obstacles and prompt a reaction.
                    </Paragraph>
                    <br/>
                    <Paragraph>
                        In the workplace, it&apos;s a mix between my work for Global Advocacy
                        based in Dubai, in which I worked across their entire conveyancing 
                        system while helping train a new hire. I also took pride in my work 
                        for Fusion themselves for the internal systems and software packages 
                        to be sold to their Clientelle. 
                    </Paragraph>
                </Section>
            </Container>
          </Layout>
    )
}

export default Page