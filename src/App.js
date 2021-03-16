import {useState} from 'react'
import Madstory from './Components/Madstory/Madstory'

function App() {
  //useState hook to read and set the state of Inputs. useState replaces our lifecycle methods, Mount, Update and Unmount. Uses a blank string as an initalized value for our state.
  const [inputs, setInputs] = useState("")

  // useState to read and set the state of the story to a boolean value. False is used as our initial value to our state,  keeping the story component from rendering until set to true by the handleSubmit function call later. 
  const [storyComplete, setStoryComplete] = useState(false)
  
  // handleSubmit is called by our form's submit button, keeps the page from refreshing and accesses the useState hook for storyComplete to change it to true. Allows the conditional rendering to allow our story to appear.
  const handleSubmit = (e) => {
    e.preventDefault()
    setStoryComplete(true)
  }

  //refreshPage is called onclick by our clear button in our form, allowing the user to refresh the page. Can be refactored to something more efficient such as a cleanup to reset our states back to default values. 
  const refreshPage = () => {
    window.location.reload(false);
  }

  return (
      <>
        <h1> an UGLY MadLibs with Hooks! </h1>
        <form>
              <label>Noun</label>
              <input
              key="nounOne"
              placeholder="Type a name."
              type="text"
              value={inputs.nounOne}
              onChange={({target}) => setInputs(state => ({...state, nounOne:target.value}))}
              />

              <label>Verb</label>
              <input 
              key="verbOne"
              type="text"
              placeholder="Type an action."
              value={inputs.verbOne}
              onChange={({target}) => setInputs(state => ({...state, verbOne:target.value}))}
              />

              <label>Noun</label>
              <input
              key="nounTwo"
              placeholder="Type a place."
              type="text"
              value={inputs.nounTwo}
              onChange={({target}) => setInputs(state => ({...state, nounTwo:target.value}))}
              />

              <label>Noun</label>
              <input 
              key="nounThree"
              placeholder="Type a different name."
              type="text"
              value={inputs.nounThree}
              onChange={({target}) => setInputs(state => ({...state, nounThree:target.value}))}
              />

              <label>Adjective</label>
              <input 
              key="adjOne"
              type="text"
              placeholder="Type a descriptive adjective."
              value={inputs.adjOne}
              onChange={({target}) => setInputs(state => ({...state,adjOne:target.value}))}
              />

              <label>Verb</label>
              <input 
              key="verbTwo"
              type="text"
              placeholder="Type a DANGEROUS action!"
              value={inputs.verbTwo}
              onChange={({target}) => setInputs(state => ({...state,verbTwo:target.value}))}
              />

              <label>Adjective</label>
              <input 
              key="adjTwo"
              type="text"
              placeholder="Type a SUPER DANGEROUS adjective."
              value={inputs.adjTwo}
              onChange={({target}) => setInputs(state => ({...state,adjTwo:target.value}))}
              />

              <label>Noun</label>
              <input 
              type="text"
              key="nounFour"
              placeholder="Type a new place!"
              value={inputs.nounFour}
              onChange={({target}) => setInputs(state => ({...state,nounFour:target.value}))}
              />
              
              <input 
              type="submit"
              value="Submit Form"
              onClick={handleSubmit}
              />
              <button onClick={refreshPage}>Clear</button>
          </form>
          <hr />
          {storyComplete ? <Madstory 
        nounOne = {inputs.nounOne}
        nounTwo = {inputs.nounTwo}
        nounThree = {inputs.nounThree}
        nounFour = {inputs.nounFour}
        verbOne = {inputs.verbOne}
        verbTwo = {inputs.verbTwo}
        adjOne = {inputs.adjOne}
        adjTwo = {inputs.AdjTwo}
        /> : "Please fill out the fields above to see the story!"}
      </>
  );
}

export default App;
