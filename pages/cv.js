import {
    Container,
    Heading,
    Box,
    useColorModeValue
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'

const Page = () => {
    return(
        <Layout>
            <Container>
                <Box borderRadius="lg" 
                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} 
                p={3} 
                mb={6} 
                align="center">
                    To download my CV, check it out on <a href='https://www.dropbox.com/scl/fi/ajfmor3l52u1g6h3jsevh/Jack-kinyanjui.docx?rlkey=iq0ql1c9b947yg4zp2nsqms2u&dl=0'
                    >&quot;LinkedIn&quot;</a> or if you want to see my projects, navigate to <a href='
                        /works/'
                    >Works</a>
                </Box>
                
                <Box display={{md:'flex'}}>
                    <Box flexGrow={1}>
                    <Heading as="h3" fontSize={20} mb={4}>
                        Work Experience
                    </Heading>
                    </Box>
                </Box>
                <Section delay={0.2}> 
                    <Heading as="h3" variant="cv-title">
                        Freelance Software Developer (2022 - Present)
                    </Heading>
                    <Paragraph>
                        Worked with customers directly. Demonstrating effective 
                        communication skills to understand their needs.
                    </Paragraph>
                    <br/>
                    <Paragraph>
                        Sourced jobs to develop skills in networking and developing 
                        business for myself.
                    </Paragraph>
                    <br/>
                    <Paragraph>
                        Developed strong time management skills to meet client 
                        deadlines, developing skills in timetabling and prioritising 
                        work to be more efficient and leaving time for unforeseen issues.
                    </Paragraph>
                    <br/>
                    <Paragraph>
                        Learned how to diagnose issues in hardware and software to 
                        become more independent in problem solving.
                    </Paragraph>
                </Section>
                <br/>

                <Box display={{md:'flex'}}>
                    <Box flexGrow={1}>
                        <Heading as="h3" fontSize={20} mb={4}>
                            Education
                        </Heading>
                    </Box>
                </Box>
                <Section delay={0.2}> 
                    <Heading as="h3" variant="cv-title">
                        University of Nairobi (Sept 2020 - Present)
                    </Heading>
                    <Heading as="h3" fontSize={16} mb={4}>
                        Bachelors of Economics
                    </Heading>
                    <Paragraph>
                    My background in Economics has provided me with a unique lens through which I approach development. I recognize the importance
                    of web development, critical thinking, and problem-solving—skills honed during my academic pursuits. The combination of economic
                    principles and coding proficiency enables me to approach software development projects with a holistic perspective, considering both
                    the technical and business aspects.
                    </Paragraph>
                    <br/>
                    <Paragraph>
                        
                    </Paragraph>
                </Section>
            
                <Section delay={0.2}> 
                    <Heading as="h3" variant="cv-title">
                        Christ The King Kirwara High School (Nov 2019)
                    </Heading>
                    <Paragraph>
                        Fnished My High School Education
                    </Paragraph>
                    <Paragraph>
                        
                    </Paragraph>
                    <br/>
                    <Paragraph>
                        KCSE Level: English, Maths, Kiswahili, Biology, Chemistry, History, Agriculture, C.R.E
                    </Paragraph>
                    <Paragraph>
                        Graded with 1 C, 1 B, 2 B+&lsquo;s, 2 B+&lsquo;s, 1 A- and 1 A.
                    </Paragraph>
                </Section>
                
                <Section delay={0.2}> 
                    <Heading as="h3" variant="cv-title">
                        LightHouse Grace Academy (Jan 2009 - Dec 2014)
                    </Heading>
                    <Paragraph>
                        KCPE Level: English, Maths, Science, 
                        Social Studies, Kiswahili.
                    </Paragraph>
                    <br/>
                    <Paragraph>
                        Graded with 1 B, 3 B+&lsquo;s and 1 A.
                    </Paragraph>
                </Section>
                <br/>
            </Container>
        </Layout>
    )
}

export default Page