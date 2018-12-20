import React from 'react';

export default class StatsTable extends React.Component {
    getTableStats() {
        return this.props.stats.filter(stat => stat.length > 0).map((value, index)=>{
            let rowDetails = value.map((statValue, statIndex)=>{
                return <td key={statIndex}>{statValue}</td>
            });
            return <tr key={index}>{rowDetails}</tr>;
        });
    }

    getTableHeaders() {
        return this.props.headers.map((value, index)=>{
            return <th key={index}>{value}</th>;
        })
    }

    render(){
        return (
            <div className="panel">
                <br/>
                <div className="panel-header">
                    <h5>{this.props.tableName}</h5>
                </div>
                <div className="panel-body">
                <table className="table">
                    <thead>
                        <tr>
                            {this.getTableHeaders()}
                        </tr>
                    </thead>
                    <tbody>
                        {this.getTableStats()}
                    </tbody>
                </table>
                </div>
            </div>
        )
    }
}