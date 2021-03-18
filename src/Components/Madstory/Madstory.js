
// Fair warning here, I did NOT write this story to utilize the 'correct' parts of english. I simply slapped the story together for sake of getting the props passed down and to demonstrate utilization of the same props again and again. 

function Madstory({nounOne, nounTwo, nounThree, nounFour, verbOne, verbTwo, adjOne, adjTwo}) {
    return (
        <>
            <p>
                There once was a {nounOne}, who lived on {nounTwo}. 
            </p>
            <p> 
                {nounOne} loved to {verbOne} all day long.
            </p>
            <p>
                but the people of {nounTwo} really didnt like that {nounOne} was so {adjOne}.
            </p>
            <p> 
                So they hired {nounThree} who was {adjTwo} and could {verbTwo} to scare {nounOne} away!
            </p>
            <p>
                Thus, {nounOne} moved away to {nounFour}.
            </p>
            <p>
                The end.
            </p>

          
        </>
    );
  }
  
  export default Madstory;
  