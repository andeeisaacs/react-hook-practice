import {useState, useEffect} from 'react'
import Madstory from './Components/Madstory/Madstory'

function App() {
  //useState hook to read and set the state of Inputs. useState replaces our lifecycle methods, Mount, Update and Unmount. Uses a blank string as an initalized value for our state.
  const [inputs, setInputs] = useState("")

  // One more useState to read and set the state of the story to a boolean value. False is used as our initial value to our state,  keeping the story component from rendering until set to true by the handleSubmit function call later. 
  const [storyComplete, setStoryComplete] = useState(false)
  
  // handleSubmit is called by our form's submit button, keeps the page from refreshing and accesses the useState setter hook for storyComplete to change it to true. Allows the conditional rendering to allow our story to appear.
  const handleSubmit = (e) => {
    e.preventDefault()
    setStoryComplete(true)
  }

  //refreshPage is called onclick by our clear button in our form, allowing the user to refresh the page. Can be refactored to something more efficient such as a cleanup to reset our states back to default values. 
  //The .reload is a depreciated bit of code, but it still runs and is used right now to simply complete the project. 
  const refreshPage = () => {
    window.location.reload(false);
  }

  // This is.. quite useless to be honest. HOWEVER, it was practice to see how useEffect works. It updates the title of the page with what ever is the current value of the nouneOne state value, as written in the first noun input box.  Its neat, but nearly a direct example usage from the React hooks documentation on useEffect. 
  useEffect(() => {
    document.title = `Your first noun is ${inputs.nounOne}`
  });

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
              // Neat stuff jere- we bind target, which is the input box here, to our setter we defined earlier on with useState, we then say take a look into our object and if the key:value doesnt exist, create the key and slap our value of input into it every time the input box is changed. In the end, this is nice because we do not need to create a ton of variables early on for each state. Input for our read, setInput for our setter. I am sure there is more elegant ways of doing this, and more of a 'DRY' way, but for right now, this works well. 
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
              placeholder="Type a adjective."
              value={inputs.adjOne}
              onChange={({target}) => setInputs(state => ({...state,adjOne:target.value}))}
              />

              <label>Verb</label>
              <input 
              key="verbTwo"
              type="text"
              placeholder="Type an action verb!"
              value={inputs.verbTwo}
              onChange={({target}) => setInputs(state => ({...state,verbTwo:target.value}))}
              />

              <label>Adjective</label>
              <input 
              key="adjTwo"
              type="text"
              placeholder="Type an adjective."
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

          {/* Quick conditional render here so that our submit button is not useless. The form will only render if the submit button has been clicked. It does not check, however, if the fields have been filled out at all. */}
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
