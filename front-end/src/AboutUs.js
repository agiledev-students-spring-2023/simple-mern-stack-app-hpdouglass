import './AboutUs.css'
import photo from './photo.jpg'


/**
 * A React component that is used to represent the About Us page of the site.
 * @param {*} param0 an object holding any props passed to this component from its parent component.
 * @returns The contents of this component, in JSX form.
 */
const AboutUs = props => {
  return (
    <div>
      <h1>About Me</h1>
        <p>
            <br/>
            My name is Harrison Douglass, and I am a third year student in the College of Arts and Sciences at New York University.
            <br/><br/>
            Originally from the Washington, DC area, I am majoring in Computer Science and minoring in Business Studies.
            <br/><br/>
        </p>

        <img src={photo} alt="Photo of Harrison" width="40%"/>
    </div>
  )
}

// Export this page for use in other files.
export default AboutUs