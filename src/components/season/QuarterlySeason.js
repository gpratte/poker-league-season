import React from 'react'
import moment from 'moment-timezone'
import Table from 'react-bootstrap/Table';
import Payouts from '../common/Payouts'
import Standings from "../common/Standings";

class QuarterlySeason extends React.Component {

  render() {
    const {start, end, numGamesPlayed, qTocCollected, players, payouts} = this.props.value;

    const startDate = moment(start).tz('America/Chicago').format('MM/DD')
    const endDate = moment(end).tz('America/Chicago').format('MM/DD')

    return (
      <div>
        <Table borderless={true} size="sm">
          <tbody>
          <tr>
            <td>Start date</td>
            <td>{startDate}</td>
          </tr>
          <tr>
            <td>End date</td>
            <td>{endDate}</td>
          </tr>
          <tr>
            <td>Games</td>
            <td>{numGamesPlayed}</td>
          </tr>
          <tr>
            <td>Quarterly TOC</td>
            <td>${qTocCollected}</td>
          </tr>
          </tbody>
        </Table>

        <Standings value={ {players:players} }/>

        <Payouts value={payouts}/>
      </div>
    );
  }
}

export default QuarterlySeason

