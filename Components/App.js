App = React.createClass({
	render: function(){

		var styles={
			margin: '0 auto',
			textAlign: 'center',
			width: '90%'
		};

		return (
			<div style={styles}>
				<h1>Wyszukiwarka GIFÓW!</h1>
				<p>Znajdz gifa na <a href="http://giphy.com"> giphy </a> Naciskaj enter, aby pobrać kolejne gify.</p> 

				<Gif 
					loading={this.state.loading}
   				 	url={this.state.gif.url}
    				sourceUrl={this.state.gif.sourceUrl}
    			/>
    			<Search onSearch={this.handleSearch}
					
				/>
			</div>

		);
	}
});