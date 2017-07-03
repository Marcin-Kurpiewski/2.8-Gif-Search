var GIPHY_API_URL = "http://api.giphy.com";
var GIPHY_PUB_KEY = '702fc04dc2c04b068533a987685543a8';

App = React.createClass({

	getInitialState() {
    return {
        loading: false,
        searchingText: '',
        gif: {}
    };
},



  getGif: (searchingText) => {
	    return new Promise((resolve, reject) => {

              var url = GIPHY_API_URL + '/v1/gifs/random?api_key=' + GIPHY_PUB_KEY + '&tag=' + searchingText;  // 2.
              var xhr = new XMLHttpRequest();  // 3.
              xhr.open('GET', url);
              xhr.onload = function() {
                  if (xhr.status === 200) {
                      var data = JSON.parse(xhr.responseText).data; // 4.
                      var gif = {  // 5.
                          url: data.fixed_width_downsampled_url,
                          sourceUrl: data.url
                      };
                      resolve(gif);  // 6.
                  }
              };
              xhr.send();

          })
  },


            handleSearch: function(searchingText) {  // 1.
                this.setState({
                    loading: true  // 2.
                });

                this.getGif(searchingText).then((gif)=>{

                    this.setState({  // 4
                        loading: false,  // a
                        gif: gif,  // b
                        searchingText: searchingText  // c
                    });

                })

            },

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