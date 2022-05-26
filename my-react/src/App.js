import React, { Component } from 'react';
import Pets from './Pets/pets'

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      pets:[
        {name:'Baira', color: 'Black'},
        {name: 'Puma', color: 'Black'},
        {name: 'Markiz', color: 'Mix'}
      ],
      pageTitle: 'My pets',
      showPets: false
    }
  }
 
  changeTitleHandler = (newTitle) =>{
    this.setState({
      pageTitle: newTitle
    })
  }

  togglePetsHandler = () =>{
    this.setState({
      showPets: !this.state.showPets
    })
  }

  onChangeName(name, index) {
    const pet = this.state.pets[index]
    pet.name = name
    const pets = [...this.state.pets]
    pets[index] = pet
    this.setState({pets})
  }

  deleteHandler(index){
    const pets = this.state.pets.concat()
    pets.splice(index, 1)
    this.setState({pets})
  }

  render(){
    
    const divStyle = {
      textAlign: 'center',
      'color':'black',
      fontSize: '20px'
    };
    
    return (
      <div style={divStyle}>
        <h1>{this.props.title}</h1>
        <button onClick={this.togglePetsHandler}>Toggle pets</button>
        { this.state.showPets
            ?this.state.pets.map((pet, index) => {
              return(
                <div style={{
                  width: 400,
                  margin: 'auto',
                  paddingTop: '20px'
                }}>
                  <Pets
                    key={index}
                    name={pet.name}
                    color={pet.color}
                    onDelete={this.deleteHandler.bind(this, index)}
                    onChangeName={event => this.onChangeName(event.target.value, index)} />
                </div>
                )
             })
            :null
          }
      </div>   
    );
  };
}


export default App;



