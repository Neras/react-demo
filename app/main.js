var React = require('react');

var ReactDOM = require('react-dom');
var Content = React.createClass({
	render:function(){
		return (
			<h1>Hello,World</h1>
			);
	}
});

 ReactDOM.render(<Content />, document.getElementById('app'));