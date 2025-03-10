import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    const pets = this.props.pets.map(pet => (
      <Pet pet={pet} onAdoptPet={this.props.onAdoptPet} key={pet.id} />
    ))
    return <div className="ui cards">{pets}</div>
  }
}

export default PetBrowser
