import React from 'react'
import './Home.css'
import Particles from 'react-particles-js';
import first from './images/first.jpg'
import second from './images/second.jpg'
import third from './images/third.jpg'

const Home = () => {
	return (
		<div className="container">
			<div className="row">
				<header>
					<div className="box">
						<h2>Lorem ipsum dolor.</h2>
						<h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste doloremque amet </h4>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint odit deserunt, quae veniam nihil, in assumenda omnis distinctio.</p>
					</div>
					<div className="image-box">
						<img src={first} alt=""/>
					</div>
				</header>
			</div>
			<div className="row">
				<div className="card">
					<div className="card-title">
						<span>Lorem, ipsum dolor.</span>
					</div>
					<div className="card-image">
						<img src={second} alt=""/>
					</div>
					<div className="card-text">
						<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde esse deleniti odit in tenetur rem impedit eveniet, repudiandae maiores harum?</p>
					</div>
					<div className="card-action">
						<button>Learn More</button>
					</div>
				</div>
				<div className="card">
					<div className="card-title">
						<span>Lorem, ipsum dolor.</span>
					</div>
					<div className="card-image">
						<img src={second} alt=""/>
					</div>
					<div className="card-text">
						<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde esse deleniti odit in tenetur rem impedit eveniet, repudiandae maiores harum?</p>
					</div>
					<div className="card-action">
						<button>Learn More</button>
					</div>
				</div>
				<div className="card">
					<div className="card-title">
						<span>Lorem, ipsum dolor.</span>
					</div>
					<div className="card-image">
						<img src={second} alt=""/>
					</div>
					<div className="card-text">
						<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde esse deleniti odit in tenetur rem impedit eveniet, repudiandae maiores harum?</p>
					</div>
					<div className="card-action">
						<button>Learn More</button>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="special">
					<h4>Lorem ipsum dolor sit amet.</h4>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sed harum sit corrupti, quam, earum suscipit eveniet accusamus ullam quisquam nihil voluptas deleniti adipisci aliquid exercitationem inventore sequi reprehenderit soluta?</p>
					<button>Call to Action</button>
				</div>
			</div>
			<div className="row">
				<div className="left">
					<img src={third} alt=""/>
				</div>
				<div className="right">
					<h4>Lorem ipsum dolor sit amet.</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam autem iure !</p>
					<ul>
						<li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, velit.</li>
						<li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. !</li>
						<li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit perspiciatis </li>						
					</ul>				
				</div>
			</div>
			<div className="row">
			<div className="title"><h2>Lorem ipsum dolor sit amet</h2></div>
			</div>
			<div className="row">				
				<div className="box">
					<h4>Lorem, ipsum dolor</h4>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quod facilis mollitia labore esse. Dolorem assumenda veniam illum maxime maiores.</p>
				</div>
				<div className="box">
					<h4>Lorem ipsum dolor sit</h4>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, odio. Amet, labore iste. Tempora nemo dolor, mollitia nesciunt nulla praesentium.</p>
				</div>
				<div className="box">
					<h4>Lorem ipsum dolor sit amet</h4>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptate quia dolores harum molestiae, laboriosam dignissimos sit! Ut, dolore recusandae?</p>
				</div>
			</div>
		<div className="row">
		<div className="footer">
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic labore aut eaque commodi vero quia alias saepe quae, voluptatum minus.</p>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, nesciunt? Quibusdam incidunt aperiam expedita labore quam voluptate provident necessitatibus facilis!</p>
			</div>
		</div>
		</div>
	)
}

export default Home
