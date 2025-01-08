import { useState } from 'react'

const Header = ({head}) => {
  return (
    <div>
      <h1>{head}</h1>
    </div>
  )  
}

const Statistics = (props) => {
  const all = props.good + props.neutral + props.bad
  const average = (props.good - props.bad) / all
  const positive = (props.good / all) * 100
  
  if (all === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <div>
      <StatisticsLine text="good" value={props.good} />
      <StatisticsLine text="neutral" value={props.neutral} />
      <StatisticsLine text="bad" value={props.bad} />
      <StatisticsLine text="all" value={all} />
      <StatisticsLine text="average" value={average} />
      <StatisticsLine text="positive" value={positive} />
    </div>
  )  
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
) 

const StatisticsLine = (props) => {
  return (
    <tr>
      <Statistic data={props.text} />
      <Statistic data={props.value} />
    </tr>
  )
}

const Statistic = ({data}) => (<td>{data}</td>)

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
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App