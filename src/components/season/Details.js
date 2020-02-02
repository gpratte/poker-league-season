import React from 'react'
import moment from 'moment-timezone'
import Table from 'react-bootstrap/Table';

class Details extends React.Component {

  renderPayouts(payouts) {
    return payouts.map((payout, index) => {
      const {id, place, amount} = payout
      return (
        <tr key={id}>
          <td>{place}</td>
          <td>${amount}</td>
        </tr>
      )
    })
  }

  render() {
    const {
      start, end, numGamesPlayed, totalCombinedAnnualTocCalculated, kittyCalculated, payouts} = this.props.value;

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
            <td>Kitty</td>
            <td>${kittyCalculated}</td>
          </tr>
          <tr>
            <td>Annual TOC</td>
            <td>${totalCombinedAnnualTocCalculated}</td>
          </tr>
          </tbody>
        </Table>

        <Table striped bordered size="sm">
          <thead>
          <tr>
            <th>Place</th>
            <th>Amount</th>
          </tr>
          </thead>
          <tbody>
          {this.renderPayouts(payouts)}
          </tbody>
        </Table>
        <hr/>
      </div>
    );
  }
}

export default Details
