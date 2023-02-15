import './AboutUs.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

/**
 * A React component that is used to represent the About Us page of the site.
 * @param {*} param0 an object holding any props passed to this component from its parent component.
 * @returns The contents of this component, in JSX form.
 */
const AboutUs = props => {
  const [paragraphs, setParagraphs] = useState([])
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState('')
  const [imageURL, setImageURL] = useState('')

  /**
    * A nested function that fetches messages from the back-end server.
    */
  const fetchMessages = () => {
    axios
      .get(`${process.env.REACT_APP_SERVER_HOSTNAME}/aboutus`)
      .then(response => {
        // use axios to bundle up all response data
        const messages = response.data.paragraphs
        const imageURL = response.data.imageURL
        console.log(imageURL)
        setParagraphs(messages)
        setImageURL(imageURL)
      })
      .catch(err => {
        // if there is an error, load the error on the page.
        setError(err)
      })
      .finally(() => {
        // we have loaded from backend successfully.
        setLoaded(true)
      })
  }
  
  // load data from server when the component first loads
  useEffect(() => {
    fetchMessages()

    // reload data from server every 5000ms
    const intervalHandle = setInterval(() => {
      fetchMessages()
    }, 5000)
  
    // when component unloads, clear the timer so messages aren't still being loaded
    return e => {
      clearInterval(intervalHandle)
    }
  }, [])

  return (
    <>
      <h1>About Me</h1>
      {paragraphs.map(desc => (<p>{desc}</p>))}
      <img style={{width: "40%"}} src={`${imageURL}`} alt="Photo of Harrison" />
    </>
  )
}

// Export this page for use in other files.
export default AboutUs