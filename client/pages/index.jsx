import 'whatwg-fetch'
import { useQuery, useMutation, useQueryClient } from 'react-query'
import KnowledgeCheckContainer from '../components/KnowledgeCheckContainer'
import ContentContainer from '../components/ContentContainer'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Icon from '../components/Icon'
import KnowledgeCheck from '../components/KnowledgeCheck'
import { H1 } from '../components/Typography'

function HomePage() {

    const queryClient = useQueryClient()

    const { loading, data: knowledgeChecks } = useQuery('knowledgeChecks', () =>
        fetch(
            '/api/knowledge-check-blocks'
        ).then((res) => res.json())
    );

    function persistState(blockState) {
        fetch('/api/user-state', {
            method: 'POST',
            body: JSON.stringify(blockState)
        })
    }

    const mutation = useMutation(persistState, () => {
        queryClient.invalidateQueries('knowledgeChecks')
    })

    return (
        <>
            <Header />
            <KnowledgeCheckContainer>
                <ContentContainer>
                    <H1>Rise coding challenge</H1>
                </ContentContainer>
                <ContentContainer>
                    {loading ? (
                        <div className="loadingSpinner">
                            <Icon icon="spinner2" size="30px" />
                        </div>
                    ) : (
                        knowledgeChecks?.map((check) => (
                            <KnowledgeCheck
                                key={check.question?.text}
                                data={check}
                                onStateUpdate={mutation.mutate}
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
