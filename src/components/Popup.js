import React from "react";

import Modal from "react-responsive-modal";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class Popup extends React.Component {
 
  state = {
    open: false,
    displaySelectedPlayer: false,
    // currentPlayer: "Sachin",
    players: ["Kishore Kumar", "Kohli", "Dhoni"],
    selectedPlayer: "Kishore Kumar",
    validationError: ""
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  onPlayerSelect = () => {
    this.setState({ displaySelectedPlayer: true });
  };

  onPlayerClose = () => {
    this.setState({ displaySelectedPlayer: false });
  };

//   getCurrentPlayers() {
//       return (
//           <div>
//               <h2>{this.state.currentPlayers.map(this.appendTab)}</h2>
//           </div>
//       )
//   }

//   appendTab(value) {
//         return value + "\t\t\t";
//   } 

//   setStateWithSelectedBatsmen(value){
//       this.state.selectedPlayer = value ;

//   }
  render() {
    const { open } = this.state;
    return (
      <div style={styles}>
        <h2>Cricket App</h2>
        <label>Current Batsmen</label>
        <br/>
        {/* {this.state.currentPlayer} ,
        {this.state.selectedPlayer} */}
        <br/>
        <button onClick={this.onOpenModal}>Out</button>
        <Modal open={open} onClose={this.onCloseModal} center>
          <h2>Available Batsmen</h2>
          {/* <select value={this.state.selectedTeam} 
                onChange={(e) => this.setState({selectedTeam: e.target.value, validationError: e.target.value === "" ? 
                "You must select your favourite team" : ""})}>
          {this.state.teams.map((team) => <option key={team.value} value={team.value}>{team.display}</option>)}
        </select> */}
          <select 
          value={this.state.selectedPlayer} 
                 onChange={ 
                     (e) => this.setState({selectedPlayer: e.target.value, validationError: e.target.value === "" ? 
                     "You must select your favourite team" : ""})}>
           {this.state.players.map((player) => <option key={player} value={player}>{player}</option>)}
        

        </select>
        <button onClick={this.onPlayerSelect} >Submit</button>
        

        </Modal>
        <Modal open={this.state.displaySelectedPlayer} onClose={this.onPlayerClose} center>
            <h2>Next Batsman:</h2>
            <br/>
            {this.state.selectedPlayer}
        </Modal>
      </div>
    );
  }
}

export default Popup;