import './index.css'

const NavBar = props => {
  const {score, isGamePlaying, timerValue} = props

  return (
    <div className="score-and-timer-card">
      <li className="nav-item">
        <p className="score-str">
          Score: <span className="score-int">{score}</span>
        </p>
      </li>
      <li className="nav-item">
        <p className="timer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer-png"
          />
          {timerValue} sec
        </p>
      </li>
    </div>
  )
}

export default NavBar
