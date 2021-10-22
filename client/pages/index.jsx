import 'whatwg-fetch'

import { useEffect, useState } from 'react'
import PageWrapper from '../components/PageWrapper'
import ContentContainer from '../components/ContentContainer'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Icon from '../components/Icon'
import KnowledgeCheck from '../components/KnowledgeCheck'

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

    return (
        <PageWrapper>
            <Header />
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
                        />
                    ))
                )}
            </ContentContainer>
            <Footer />
        </PageWrapper>
    )
}

export default HomePage
