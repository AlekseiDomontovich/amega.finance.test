import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function LeafletMap({ mapData, dataIsValid }) {
	const mapCoord = dataIsValid
		? [mapData.latitude, mapData.longitude]
		: [51.505, -0.09];

	const mapPlace = dataIsValid ? mapData.connection.isp : null;

	const key = dataIsValid
		? `${mapData.latitude}-${mapData.longitude}`
		: 'default-key';

	return (
		<div className="map-container">
			{dataIsValid ? (
				<MapContainer
					key={key}
					center={mapCoord} // Initial map center coordinates (latitude, longitude)
					zoom={13} // Initial zoom level
					scrollWheelZoom={false} // Unbind zooming with mouse wheel
					style={{ height: '100%', width: '100%' }} // Map container style
				>
					<TileLayer
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" // Tile layer URL
					/>
					{mapPlace !== null && (
						<Marker position={mapCoord}>
							<Popup>{mapPlace}</Popup>
						</Marker>
					)}
				</MapContainer>
			) : (
				<div className="map-container__loader"></div>
			)}
		</div>
	);
}

export default LeafletMap;
