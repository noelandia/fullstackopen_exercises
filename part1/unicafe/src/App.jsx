import { useState } from 'react'

const Header = ({head}) => {
  return (
    <div>
      <h1>{head}</h1>
    </div>
  )  
}

const Total = (props) => {
  const all = props.good + props.neutral + props.bad
  const average = (props.good - props.bad) / all
  const positive = (props.good / all) * 100
  return (
    <div>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>all {all}</p>
      <p>average {average}</p>
      <p>positive {positive}</p>
    </div>
  )  
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
) 

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const head = 'give feedback'
  const statistics = 'statistics'

  return (
    <div>
      <Header head={head} />
      <div>
        <Button handleClick = {() => setGood(good + 1)} text = "good"/>
        <Button handleClick = {() => setNeutral(neutral + 1)} text = "neutral"/>
        <Button handleClick = {() => setBad(bad + 1)} text = "bad"/>
      </div>
      <Header head={statistics} />
      <Total good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App