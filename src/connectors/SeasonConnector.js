import Season from '../components/season/Season'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    season: state
  }
}

const SeasonConnector = connect(
  mapStateToProps,
  null
)(Season)

export default SeasonConnector
