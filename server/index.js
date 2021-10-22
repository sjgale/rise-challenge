const express = require('express')
const morgan = require('morgan')
const db = require('./db')

function mergeKnowledgeCheckData(knowledgeCheckBlocks = [], userState = []) {
    return knowledgeCheckBlocks.map((block) => {
        const blockState = userState.find(
            (state) => block.id === state.questionId
        )
        const selection = blockState ? blockState.selection : undefined
        const submitted = blockState ? blockState.submitted : false

        return { ...block, selection, submitted }
    })
}

function server() {
    const app = express()
    const port = process.env.PORT || 5000

    app.use(morgan('dev'))
    app.use(express.json())

    app.get('/knowledge-check-blocks', (req, res) => {
        const mergedData = mergeKnowledgeCheckData(
            db.knowledgeCheckBlocks,
            db.userState
        )
        res.send(mergedData)
    })

    app.post('/user-state', (req, res) => {
        if (
            db.userState.find(
                (state) => state.questionId === req.body.questionId
            )
        ) {
            db.userState = db.userState.map((state) =>
                state.questionId === req.body.questionId ? req.body : state
            )
        } else {
            db.userState = [...db.userState, req.body]
        }
        res.status(200).send({})
    })

    app.start = app.listen.bind(app, port, () =>
        console.log(`Listening on port ${port}`)
    )

    return app
}

if (require.main === module) server().start()

module.exports = server
