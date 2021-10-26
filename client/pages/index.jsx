import KnowledgeCheckContainer from '../components/KnowledgeCheckContainer'
import ContentContainer from '../components/ContentContainer'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Icon from '../components/Icon'
import KnowledgeCheck from '../components/KnowledgeCheck'
import { H1 } from '../components/Typography'
import useKnowledgeChecks from '../hooks/useKnowledgeChecks'

function HomePage() {
    const {knowledgeChecksLoading, mutateUserState, knowledgeChecks} = useKnowledgeChecks()

    return (
        <>
            <Header />
            <KnowledgeCheckContainer>
                <ContentContainer>
                    <H1>Rise coding challenge</H1>
                </ContentContainer>
                <ContentContainer>
                    {knowledgeChecksLoading ? (
                        <div className="loadingSpinner">
                            <Icon icon="spinner2" size="30px" />
                        </div>
                    ) : (
                        knowledgeChecks?.map((check) => (
                            <KnowledgeCheck
                                key={check.question?.text}
                                data={check}
                                onStateUpdate={mutateUserState}
                            />
                        ))
                    )}
                </ContentContainer>
            </KnowledgeCheckContainer>
            <Footer />
        </>
    )
}

export default HomePage
