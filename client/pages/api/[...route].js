const https = require('https')
const http = require('http')
import fetch from 'node-fetch'

export default async function handler(req, res) {
    const { route } = req.query
    const requestOptions = {
        method: req.method
    }

    if (req.method === 'POST') {
        requestOptions.body = req.body
        requestOptions.headers = { 'Content-Type': 'application/json' }
    }

    try {
        const response = await fetch(
            'http://localhost:5000/' + route.join('/'),
            requestOptions
        )
        const data = await response.json()
        res.json(data)
    } catch (e) {
        console.log(e)
        res.json({ success: false, error: e })
    }
}
