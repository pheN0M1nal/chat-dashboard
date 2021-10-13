import './App.css';
import logoimg from './img/logo.jpeg';
import NavItem from './componentSideNav/NavItem';

function App() {
	return (
		<div className='App'>
			<div className='sideNav'>
				<div className='d-flex'>
					<div className='wrapper'>
						<div className='userLogo'>
							<div className='img'>
								<img src={logoimg} alt='user logo' />
							</div>
						</div>
						<div className='userName'>pheNOMInal</div>
						<NavItem />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
