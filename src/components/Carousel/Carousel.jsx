import React, {Component} from 'react';

class Carousel extends Component{
    constructor(props){
        super(props);
        this.state= {
            items: [
                {
                id: 0,
                title: 'Giphy Web App',
                subTitle: 'Giphy Search Application',
                link: 'https://giphy.com/',
                selected: false
            },
            {
                id: 1,
                title: 'Covid Tracker',
                subTitle: 'Covid-19 Data Analytics Application',
                link: 'https://giphy.com/',
                selected: false
            },
            {
                id: 2,
                title: 'ChatBox',
                subTitle: 'React chat Application built with socket.io',
                link: 'https://giphy.com/',
                selected: false
            }

        ]
        }
    }

    handleCardSelector = ()=>{

    }

    render(){

    return(
        <div>
            <h1>Carousel is showing</h1>
        </div>
    )
}
}

export default Carousel 