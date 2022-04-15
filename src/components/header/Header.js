import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render () {
    return (
      <div>

        <nav class="header-nav container flex-container">
          <h1 class="logo"><a class="logo-link" href="/">Zombie Apocalypse Team Selection</a></h1>
          <button class="ghost-button">Heroes in my team : 2</button>
        </nav>	

        <section>
          <figure class="header-img">
                <img className='home-img' src="https://images.pexels.com/photos/1748652/pexels-photo-1748652.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" alt="Zombie"></img>
          </figure>
          <div class="header-description container">
            <h2 class="header-title">Meet our heroes. Build your team.</h2>
            <p>Help us keeping our closets clean and sustainable. Select 3 heroes to make your dream-team and start fighting fash-fashion zombies. Don't wait any longer.</p>
          </div>
        </section>
        
      </div>
    );
}
}

export default Header;