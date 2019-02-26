import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Locations from '../utils/USACities';

String.prototype.capitalize = function() {
    return this.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
};

class LocationSelection extends Component {
    constructor(){
        super();
        this.states = this.states.bind(this);
    }

    states() {
        let onlyState = new Map();
        for(var t in Locations){
            if(this.props.loc === "city"){
                if(this.props.state_for_city === Locations[t]["state"]
                    && !onlyState.get(Locations[t][this.props.loc])){
                        // console.log(this.props.loc, Locations[t]["state"], Locations[t][this.props.loc])
                    onlyState.set(Locations[t][this.props.loc], true)
                }
            } else if(this.props.loc === "state"){
                if(!onlyState.get(Locations[t][this.props.loc])){
                    onlyState.set(Locations[t][this.props.loc], true)
                }
            }
        }
        var sortedLocation = new Array(...onlyState.keys()).sort();
        let stateList = sortedLocation.map((key) => {
            console.log("State and Cities", this.props.selected, key)
            return <option key={key} value={key}>{key}</option>
        });
        return stateList;
    }
    render() {
        return (
        <select name={this.props.loc} value={this.props.val} onChange={this.props.onChange}>
            <option value="" defaultValue disabled>{this.props.loc.capitalize()}</option>
            {this.states()}
        </select>
        );
     }
}

LocationSelection.propTypes = {
    loc: PropTypes.string.isRequired,
    state_for_city: PropTypes.string,
    val: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default LocationSelection;