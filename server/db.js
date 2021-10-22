module.exports = {
    knowledgeCheckBlocks: [
        {
            id: 1,
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
        },
        {
            id: 2,
            question: {
                text: 'What is the meaning of life?'
            },
            answers: [
                {
                    text: 'Getting rich.',
                    isCorrect: false
                },
                {
                    text: '42.',
                    isCorrect: true
                },
                {
                    text: 'Leaving a legacy.',
                    isCorrect: false
                },
                {
                    text: 'Conquering nations.',
                    isCorrect: false
                }
            ],
            feedback: "See The Hitchhiker's Guide to the Galaxy."
        },
        {
            id: 3,
            question: {
                text: "What's my favorite color?"
            },
            answers: [
                {
                    text: 'Blue',
                    isCorrect: false
                },
                {
                    text: 'Green',
                    isCorrect: true
                },
                {
                    text: 'Red',
                    isCorrect: false
                }
            ],
            feedback: 'The color of healthy grass.'
        }
    ],
    userState: [
        {
            questionId: 1,
            selection: 'Cookies and coffee',
            submitted: true
        },
        {
            questionId: 2,
            selection: 'Getting rich.',
            submitted: false
        }
    ]
}
