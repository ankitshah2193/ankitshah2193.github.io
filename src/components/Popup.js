import React from "react";

import Modal from "react-responsive-modal";
import '../styles/popup.css';
import propTypes from 'prop-types'

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
          if(availablePlayers.length > 0) {
              this.setState({
                players: availablePlayers,
                open: true,
                selectedPlayer: availablePlayers[0]
            })
          }
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
      <div >
        <Modal className="modal-dialog" closeOnEsc = {false} closeOnOverlayClick = {false} showCloseIcon={false} open={open} onClose={this.onCloseModal} center>
          <h6 style={styles}>Select Batsman</h6>
          <br/>
          <div className="row">
          <select className="form-control col-sm-12"
          value={this.state.selectedPlayer} 
                 onChange={ 
                     (e) => this.setState({selectedPlayer: e.target.value, validationError: e.target.value === "" ? 
                     "You must select your favourite team" : ""})}>
           {this.state.players.map((player) => <option key={player} value={player}>{player}</option>)}
        </select>
        </div>
        <br/>
        <div className="text-center">
        <button onClick={this.setNewPlayer} className="btn btn-success">Submit</button>
        </div>
        </Modal>
      </div>
    );
  }
}

Popup.propTypes = {
  open: propTypes.bool,
  displaySelectedPlayer: propTypes.bool,
  players: propTypes.object,
  selectedPlayer: propTypes.string
}

export default Popup;