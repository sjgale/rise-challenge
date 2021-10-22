import PageWrapper from '../components/PageWrapper'
import ContentContainer from '../components/ContentContainer'
import Header from '../components/Header'
import Footer from '../components/Footer'
import KnowledgeCheck from '../components/KnowledgeCheck'

const knowledgeChecks = [
    {
        question: {
            text: 'What is this a picture of?',
            media: {
                type: 'image',
                url: 'https://images.articulate.com/f:jpg%7Cpng,a:retain,b:fff/rise/courses/S3jQ2LjHDoRsPUQmR7dp6hA7-IaoYPA4/d229V-nstxA6tZdi.gif'
            }
        },
        answers: [
            {
                text: 'Cookies and coffee',
                isCorrect: true
            },
            {
                text: 'Donuts and cider',
                isCorrect: false
            }
        ],
        feedback: 'I just love cookies and a warm cup of coffee!'
    }
]

function HomePage() {
    return (
        <PageWrapper>
            <Header />
            <ContentContainer>
                {knowledgeChecks.map((check) => (
                    <KnowledgeCheck key={check.question?.text} data={check} />
                ))}
            </ContentContainer>
            <Footer />
        </PageWrapper>
    )
}

export default HomePage
