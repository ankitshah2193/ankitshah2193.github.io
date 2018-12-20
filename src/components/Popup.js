import React from "react";

import Modal from "react-responsive-modal";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      displaySelectedPlayer: false,
      // currentPlayer: "Sachin",
      players: [],
      selectedPlayer: ""
    };
  }

  componentWillReceiveProps(newProps, oldProps) {
      if(newProps.wickets > this.props.wickets) {
          let availablePlayers = [];
          for(let player in newProps.players) {
              if(newProps.players[player].isAvaialbleForBatting) {
                  availablePlayers.push(player);
              }
          }
          this.setState({
              players: availablePlayers,
              open: true,
              selectedPlayer: availablePlayers[0]
          })
      }
  }

  onCloseModal = () => {
    this.setState({ open: false });
  };

  onPlayerSelect = () => {
    this.setState({ displaySelectedPlayer: true });
  };

  onPlayerClose = () => {
    this.setState({ displaySelectedPlayer: false });
  };

  setNewPlayer = () => {  
      this.props.setBatsman(this.state.selectedPlayer);
      this.setState({ open: false });
  }

  render() {
    const { open } = this.state;
    return (
      <div style={styles}>
        <Modal showCloseIcon={false} class="modal-dialog" open={open} center>
          <h6>Available Batsmen</h6>
          <br/>
          <div class="row">
          <select class="form-control col-sm-12"
          value={this.state.selectedPlayer} 
                 onChange={ 
                     (e) => this.setState({selectedPlayer: e.target.value, validationError: e.target.value === "" ? 
                     "You must select your favourite team" : ""})}>
           {this.state.players.map((player) => <option key={player} value={player}>{player}</option>)}
        </select>
        </div>
        <br/>
        <button onClick={this.setNewPlayer} className="btn btn-success">Submit</button>
        </Modal>
      </div>
    );
  }
}

export default Popup;