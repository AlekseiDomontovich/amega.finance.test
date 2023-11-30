import { useState, useEffect } from 'react';
import axios from 'axios';

import Header from './components/Header.jsx';
import IPSearchForm from './components/IPSearchForm.jsx';
import InformationList from './components/InformationList.jsx';
import LeafletMap from './components/leaflet/LeafLetMap';

function App() {
	const [ipData, setIpData] = useState(null);
	const [isFullDataFound, setFullDataFound] = useState(false);
	const [ipProvided, setIpProvided] = useState(false);

	const fetchIPData = async (ip = '') => {
		try {
			const response = await axios.get(`https://ipwho.is/${ip}`);

			setIpData(response.data);
			setFullDataFound(response.data.success);
			setIpProvided(true);
		} catch (error) {
			console.error('Error fetching IP data:', error);
		}
	};

	const formHandler = (ipAddress) => {
		setIpData(null);
		setFullDataFound(false);

		fetchIPData(ipAddress);
	};

	useEffect(() => {
		if (!ipProvided) {
			fetchIPData();
		}
	}, [ipProvided]);

	return (
		<>
			<section className="main-area">
				<div className="main-area__header">
					<section slot="header" className="section-top-area">
						<Header />
						<IPSearchForm ipProviderHandler={formHandler} />
						<section className="track-item section-top-area__bottom-item">
							<InformationList ipData={ipData} dataIsValid={isFullDataFound} />
						</section>
					</section>
				</div>
				<div className="main-area__footer">
					<section slot="footer" className="section-bottom-area">
						<LeafletMap mapData={ipData} dataIsValid={isFullDataFound} />
					</section>
				</div>
			</section>
		</>
	);
}

export default App;
