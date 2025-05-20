const boroughEmoji = {
  'Manhattan': '🏙️',
  'Brooklyn': '🌉',
  'Queens': '🗽',
  'The Bronx': '🏟️',
}

function BoroughCard({borough="Queens", bgColor}) {
	return(
		<>
			<div style={{backgroundColor: bgColor, padding: 1}}>
				<h1>{boroughEmoji[borough]} Hello from {borough}!</h1>
			</div>
		</>
	)
}

export default BoroughCard
