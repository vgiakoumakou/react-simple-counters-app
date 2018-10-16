import React, { Component } from 'react';

class Counter extends Component {
    state = {
        //value: this.props.counter.value,
        //imageUrl: 'https://png.icons8.com/ios/1600/counter.png',
        //tags: ['tag1', 'tag2']
    };

    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    // handleIncrement = product => {
    //     this.setState({ value: this.state.value + 1 });
    // }

    btnStyle = {
        marginRight: 15,
        paddingLeft: 20,
        paddingRight: 20
    };

    rowStyle = {
        borderBottom: '1px solid #f2f2f2',
        padding: 15
    };

    playerStyle = {
        marginTop: 15
    };

    winsStyle = {
        marginRight: 70
    };

    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no tags!</p>

        return <ul>{ this.state.tags.map(tag => <li key={tag}>{tag}</li>) }</ul>
    }

    render() { 
        return (
            <div className="row" style={this.rowStyle}>
                <div className="col-md-3">
                    <p style={this.playerStyle}>
                        Player #{this.props.counter.id} - <b>{this.props.counter.descr}</b>
                    </p>
                </div>
                <div className="col-md-3">
                    <p style={this.winsStyle} className={this.getBadgeClasses()}>{this.formatCount()} wins</p>
                </div>
                <div className="col-md-6">
                    {/* <img src={this.state.imageUrl} alt="" height="150" /> */}
                    <button onClick={() => this.props.onDecrement(this.props.counter)} className="btn btn-secondary" style={this.btnStyle}>-</button>
                    <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-success" style={this.btnStyle}>+</button>
                    <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger m-2" >Delete player</button>
                    {/* { this.renderTags() } */}
                </div>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "alert alert-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value } = this.props.counter;
        //return value === 0 ? 'Zero' : this.props.counter.value;
        return value;
    }

}
 
export default Counter;