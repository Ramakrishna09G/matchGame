import './index.css'

const ScoreCard = props => {
  const {score, resetGame} = props

  const onClickPlayAgain = () => {
    resetGame()
  }

  return (
    <div className="score-card-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        className="match-game-trophy"
        alt="trophy"
      />
      <p className="your-score">YOUR SCORE</p>
      <p className="score">{score}</p>
      <button className="reset-btn" type="button" onClick={onClickPlayAgain}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
          className="reset-img"
        />
        PLAY AGAIN
      </button>
    </div>
  )
}

export default ScoreCard
