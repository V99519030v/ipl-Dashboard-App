// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {competingTeam, competingTeamLogo, result, matchStatus} = matchDetails
  const textColor = matchStatus === 'Won' ? 'won-text' : 'lost'
  return (
    <li>
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="result-logo"
      />
      <p className="result-heading">{competingTeam}</p>
      <p className="won">{result}</p>
      <p className={textColor}>{matchStatus}</p>
    </li>
  )
}
export default MatchCard
