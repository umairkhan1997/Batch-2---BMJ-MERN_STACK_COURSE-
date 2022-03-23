import { useHistory, useLocation } from "react-router-dom";
import { useState } from "react"
const About = () => {
    const [value, setInput ] = useState("")
  const history = useHistory();
  const location = useLocation();
  console.log(history);
  console.log("location", location);
  const goBack = () => {
    history.push("/dashboard");
  };

  const onInputChange = (event) => {
      setInput(event.target.value)
  }

  const onSearch = () => {
    history.push(`/about?q=${value}` )
  }
  return (
    <div>
      <button onClick={goBack}>Back</button>
      <h1>About Page</h1>
      <input value={value} onChange={onInputChange }/>
      <button onClick={onSearch}>Search</button>
      {/* <h1 id="top">Film-Making Terms</h1>
      <a href="#arc_shot">Arc Shot</a>
      <br />
      <a href="#interlude">Interlude</a>
      <br />
      <a href="#prologue">Prologue</a>
      <br />
      <br />
      <h2 id="arc_shot">Arc Shot</h2>
      <p>
        A shot in which the subject is photographed by an encircling or moving
        camera
      </p>
      <h2 id="interlude">Interlude</h2>
      <p>
        A brief, intervening film scene or sequence, not specifically tied to
        the plot, that appears within a film
      </p>
      <h2 id="prologue">Prologue</h2>
      <p>
        A speech, preface, introduction, or brief scene preceding the the main
        action or plot of a film; contrast to epilogue
      </p>
      <p>
        <a href="#top">Top</a>
      </p> */}
    </div>
  );
};

export default About;
