import React, { Component } from 'react';
import data from '../names.json'
import '../App.css';


class NameDisplay extends Component {
	render() {
		return (
            <div>
                {
                    data.names.sort(function(a, b){
                        if(a.name < b.name) {return -1;}
                        if(a.name > b.name) {return 1;}
                        return 0;
                    }),

					data.names.map((names, i) => {
						return (
							<div key={i}>
								<div>
									<p>There are {names.amount} people with the name {names.name}.</p>
								</div>
							</div>
						);
					})
				}
            </div>
        );
    }
} 

export default NameDisplay;