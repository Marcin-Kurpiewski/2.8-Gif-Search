var GIPHY_LOADING_URL = 'http://www.ifmo.ru/images/loader.gif';

var styles = {
  minHeight: '310px',
  margin: '0.5em'
};

Gif = React.createClass({
  
  getUrl: function() {
    return this.props.sourceUrl || GIPHY_LOADING_URL;
  },

  getGif: function(searchingText, callback) {  // 1.
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
            callback(gif);  // 6.
        }
    };
    xhr.send();
  },
  
  render: function() {
    var url = this.props.loading ? GIPHY_LOADING_URL : this.props.url;

    return (
      <div style={styles}>
        <a href={this.getUrl()} title='view this on giphy' target='new'>
          <img id='gif' src={url} style={{width: '100%', maxWidth: '350px'}}/>
        </a>
      </div>
    );
  }
});