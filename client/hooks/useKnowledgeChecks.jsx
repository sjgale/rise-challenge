import { useQuery, useMutation, useQueryClient } from 'react-query'

export default function useKnowledgeChecks() {
    const queryClient = useQueryClient()

    const { loading, data: knowledgeChecks } = useQuery('knowledgeChecks', () =>
        fetch('/api/knowledge-check-blocks').then((res) => res.json())
    )

    function persistState(blockState) {
        fetch('/api/user-state', {
            method: 'POST',
            body: JSON.stringify(blockState)
        })
    }

    const userStateMutation = useMutation(persistState, () => {
        queryClient.invalidateQueries('knowledgeChecks')
    })

    return {
        knowledgeChecksLoading: loading,
        mutateUserState: userStateMutation.mutate,
        knowledgeChecks
    }
}
