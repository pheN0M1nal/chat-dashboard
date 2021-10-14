import './App.css';
import logoimg from './img/logo.jpeg';
import NavItem from './componentSideNav/NavItem';
import Icon8 from './componentSideNav/icons/Icon8';

function App() {
	return (
		<div className='App'>
			<div className='sideNav'>
				<div className='wrapper'>
					<div className='userLogo d-flex'>
						<div className='img'>
							<img src={logoimg} alt='user logo' />
						</div>
					</div>
					<div className='d-flex userName_arrow'>
						<div className='userName'>pheNOMInal</div>
						<div className='down_arrow'>
							<Icon8 />
						</div>
					</div>
					<NavItem />
				</div>
			</div>
		</div>
	);
}

export default App;
