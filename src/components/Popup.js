import React from "react";

import Modal from "react-responsive-modal";
import '../styles/popup.css';

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class Popup extends React.Component {
  isNewBatsman = false;
  isNewBowler = false;

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      displaySelectedPlayer: false,
      batsmen: [],
      bowlers: [],
      selectedBatsman: "",
      selectedBowler: ""
    };
  }

  componentWillReceiveProps(newProps, oldProps) {
    let batsmen,
      bowlers,
      availableBatsmen = [],
      availableBowlers = [];

    if (newProps.wickets > this.props.wickets) {
      this.isNewBatsman = true;
      batsmen = { ...newProps.bastmen };
    }

    if (newProps.overs > this.props.overs) {
      this.isNewBowler = true;
      bowlers = { ...newProps.bowlers }
    }

    for (let player in batsmen) {
      if (batsmen[player].isAvaialbleForBatting) {
        availableBatsmen.push(player);
      }
    }

    for (let player in bowlers) {
      if (bowlers[player].isAvaialbleForBowling) {
        availableBowlers.push(player);
      }
    }

    if (availableBowlers.length > 0 || availableBatsmen.length > 0) {
      this.setState({
        batsmen: availableBatsmen,
        bowlers: availableBowlers,
        open: true,
        selectedBatsman: availableBatsmen && availableBatsmen[0],
        selectedBowler: availableBowlers && availableBowlers[0],
      })
    }

  }

  onCloseModal = () => {
    this.setState({ open: false });
  };

  onBatsmanSelect = () => {
    this.setState({ displaySelectedPlayer: true });
  };

  setNewPlayer = () => {
    if (this.isNewBatsman && this.isNewBowler) {
      this.props.setBatsman(this.state.selectedBatsman);
      this.props.setBowler(this.state.selectedBowler);
    } else if (this.isNewBowler) {
      this.props.setBowler(this.state.selectedBowler);
    } else if (this.isNewBatsman) {
      this.props.setBatsman(this.state.selectedBatsman);
    }

    this.isNewBatsman = false;
    this.isNewBowler = false;
    this.setState({ open: false });
  }

  render() {
    const { open } = this.state;
    return (
      <div >
        <Modal className="modal-dialog" closeOnEsc={false} closeOnOverlayClick={false} showCloseIcon={false} open={open} onClose={this.onCloseModal} center>
          
          <div className={(this.isNewBatsman ? 'show' : 'hide')}>
            <h6 style={styles}>{this.isNewBatsman && 'Select Batsman'}</h6>
            <div className='row'>
              <select className="form-control col-sm-12"
                value={this.state.selectedBatsman}
                onChange={
                  (e) => this.setState({
                    selectedBatsman: e.target.value, validationError: e.target.value === "" ?
                      "You must select your favourite team" : ""
                  })}>
                {this.state.batsmen.map((player) => <option key={player} value={player}>{player}</option>)}
              </select>
            </div>
            <br />  
          </div>

          <div className={(this.isNewBowler ? 'show' : 'hide')}>
            <h6 style={styles}>{this.isNewBowler && 'Select Bowler'}</h6>
            <div className='row '>
              <select className="form-control col-sm-12"
                value={this.state.selectedBowler}
                onChange={
                  (e) => this.setState({
                    selectedBowler: e.target.value, validationError: e.target.value === "" ?
                      "You must select your favourite team" : ""
                  })}>
                {this.state.bowlers.map((player) => <option key={player} value={player}>{player}</option>)}
              </select>
            </div>

            <br />
          </div>

          <div className="text-center">
            <button onClick={this.setNewPlayer} className="btn btn-success">Submit</button>
          </div>

        </Modal>
      </div>
    );
  }
}

export default Popup;