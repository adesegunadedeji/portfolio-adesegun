import React, {Component} from 'react';
import {Container, Row} from 'react-bootstrap';
import Card from './Card';
import meowwoof from './images/dog-layout.png';
import covidImage from './images/covid.png';
import chatbox from './images/Chatbox.png';


class Carousel extends Component{
    constructor(props){
        super(props);
        this.state= {
            items: [
                {
                id: 0,
                title: 'Meow Woof',
                imgSrc: meowwoof,
                subTitle: 'Pet Adoption Web Application',
                link: 'https://meowwoof-deployed-app.herokuapp.com',
                selected: false
            },
            {
                id: 1,
                title: 'Covid Tracker',
                imgSrc: covidImage,
                subTitle: 'Covid 19 Data tracking Application',
                link: 'https://covid19trackingnaijadev.herokuapp.com',
                selected: false
            },
            {
                id: 2,
                title: 'ChatBox',
                imgSrc: chatbox,
                subTitle: 'React chat Application built with socket.io',
                link: 'http://fast-mesa-64631.herokuapp.com/',
                selected: false
            }

        ]
        }
    }

    handleCardSelector = (id)=>{
        console.log(id, "Comig from Carousel")
        let items = [...this.state.items]
        items[id].selected  = items[id].selected? false: true;
        items.forEach( item => {
            if (item.id !==id){
                item.selected = false;
            }
        })
        this.setState({
            items
        })
    }


    createItems = (items)=>{
        return items.map(item =>{
            return <Card item= {item} handleClick = {(
                e => this.handleCardSelector(item.id,e)
            )} key={item.id}/>
        })

    }
    
    render(){
    return(
       <Container fluid={true}>
           <Row className= "justify-content-around">
               {this.createItems(this.state.items)}
           </Row>

       </Container>
    )
}
}

export default Carousel 