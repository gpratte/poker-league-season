import React from 'react'
import Table from 'react-bootstrap/Table';

class Standings extends React.Component {

  renderStandings(players) {
    return players.map((player, index) => {
      const {id, place, name, points, entries} = player
      return (
        <tr key={id}>
          <td>{place}</td>
          <td>{name}</td>
          <td>{points}</td>
          <td>{entries}</td>
        </tr>
      )
    })
  }

  render() {
    const players = this.props.value;

    return (
      <Table striped bordered size="sm">
        <thead>
        <tr>
          <th>Place</th>
          <th>Name</th>
          <th>Points</th>
          <th>Entries</th>
        </tr>
        </thead>
        <tbody>
        {this.renderStandings(players)}
        </tbody>
      </Table>
    );
  }
}

export default Standings
