function BoroughCard({borough="Queens", bgColor}) {
	return(
		<>
			<div style={{backgroundColor: bgColor}}>
				<h1>Hello from {borough}!</h1>
			</div>
		</>
	)
}

export default BoroughCard
