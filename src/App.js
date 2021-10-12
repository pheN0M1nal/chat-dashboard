import './App.css';
import logoimg from './img/logo.jpeg';

function App() {
	return (
		<div className='App'>
			<div className='sideNav'>
				<div className='wrapper'>
					<div className='userLogo'>
						<img
							className='img'
							src={logoimg}
							alt='user logo'
						/>
					</div>
					<div className='userName'>user name</div>
					<div className='navItem'>navItem</div>
				</div>
			</div>
		</div>
	);
}

export default App;
