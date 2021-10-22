const https = require('https')
const http = require('http')
import fetch from 'node-fetch';

export default async function handler(req, res) {
  const { route } = req.query
  try {
    const response = await fetch('http://localhost:5000/' + route.join('/'))
    const data = await response.json()
    res.json(data)
  } catch (e) {
    console.log(e)
    res.JSON([])
  }
}
