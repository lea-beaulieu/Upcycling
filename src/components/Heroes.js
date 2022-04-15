import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AddButton from './AddButton';

class Heroes extends React.Component {
  state = {
    heroes: [],
  }
  

  getAllHeroes = () => {
    axios.get("https://reqres.in/api/users?page=2")
      .then(response => {
        console.log(response.data.data)

        this.setState({ heroes: response.data.data})
      })
      .catch(err => console.log("error", err))
  }

  componentDidMount() {
    this.getAllHeroes();
  }

  
  render () {
    
    return (
      <>
 
        {
          this.state.heroes.map( hero => {
            return (
              <div>
                <main class="main">
                    <section class="page-search">
                        <div className="card-search">

                          <div className="card" key={hero.id}>
                          
                            <div className="card-figure">
                              <Link to={`/heroes/${hero.id}`}><img src={hero.avatar} alt=""></img></Link>
                            </div>

                            <div class="card-content"><h3>{hero.first_name}</h3></div>
                            <AddButton/>
                        
                          </div>
                        </div>
                        </section>
                </main>
              </div>
            )})
        }
      </>
    ) 
  }
}

export default Heroes;