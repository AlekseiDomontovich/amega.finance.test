function InformationList({ ipData, dataIsValid }) {
	const itemStatus = (data) => {
		if (!data) {
			return 'Searching...';
		} else if (data && !dataIsValid) {
			return 'No data';
		}
	};

	return (
		<>
			<ul>
				<li>
					<div className="track-item__label">IP address</div>
					<div className="track-item__value">
						{ipData ? ipData.ip : 'Searching...'}
					</div>
				</li>
				<li>
					<div className="track-item__label">Location</div>
					<div className="track-item__value">
						{dataIsValid &&
							`${ipData.region}, ${ipData.city}, ${ipData.postal}`}
						{itemStatus(ipData)}
					</div>
				</li>
				<li>
					<div className="track-item__label">Time zone</div>
					<div className="track-item__value">
						{dataIsValid && `UTC ${ipData.timezone.utc}`}
						{itemStatus(ipData)}
					</div>
				</li>
				<li>
					<div className="track-item__label">ISP</div>
					<div className="track-item__value">
						{dataIsValid && ipData.connection.isp}
						{itemStatus(ipData)}
					</div>
				</li>
			</ul>
		</>
	);
}

export default InformationList;
