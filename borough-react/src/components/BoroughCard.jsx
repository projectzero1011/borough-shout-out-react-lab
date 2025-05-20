function BoroughCard({borough="Queens", bgColor}) {
	return(
		<>
			<div style={{background: bgColor}}>
				<p>Hello from {borough}!</p>
			</div>
		</>
	)
}

export default BoroughCard
