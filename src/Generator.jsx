import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import axios from 'axios'

const Generator = () => {
  const [quote, setQuote] = useState('Loading...')

  const fetchQuote = async () => {
    const apiUrl = process.env.API_NINJA_URL
    const apiKey = process.env.API_NINJA_KEY

    const options = {
      method: 'GET',
      url: `${apiUrl}/quotes`,
      params: {
        categories: 'computers'
      },
      headers: {
        'X-Api-Key': apiKey
      }
    }

    const response = await axios.request(options)
    setQuote(response.data[0].quote)
  }

  useEffect(() => {
    fetchQuote()
  }, [])

  return (
    <Container
      className='d-flex justify-content-center align-items-center'
      style={{ height: '100vh' }}
    >
      <Card style={{ width: '35rem' }} className='p-5'>
        <Card.Body className='text-center'>
          <Card.Title>
            <h1>Computers Quotes Generator</h1>
          </Card.Title>
          <Card.Text>
            {quote}
          </Card.Text>
          <Button variant='primary' onClick={fetchQuote}>Generate Quote</Button>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default Generator
