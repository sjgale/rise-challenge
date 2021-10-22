import 'whatwg-fetch'

import { useEffect, useState } from 'react'
import KnowledgeCheckContainer from '../components/KnowledgeCheckContainer'
import ContentContainer from '../components/ContentContainer'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Icon from '../components/Icon'
import KnowledgeCheck from '../components/KnowledgeCheck'
import { H1 } from '../components/Typography'

function HomePage() {
    const [loading, setLoading] = useState(false)
    const [knowledgeChecks, setKnowledgeChecks] = useState([])

    useEffect(async () => {
        setLoading(true)
        const response = await fetch('/api/knowledge-check-blocks')
        const data = await response.json()
        setKnowledgeChecks(data)
        setLoading(false)
    }, [])

    function persistState(questionId, selection, submitted) {
        fetch('/api/user-state', {
            method: 'POST',
            body: JSON.stringify({ questionId, selection, submitted })
        })
    }

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
                        knowledgeChecks.map((check) => (
                            <KnowledgeCheck
                                key={check.question?.text}
                                data={check}
                                onStateUpdate={persistState}
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
