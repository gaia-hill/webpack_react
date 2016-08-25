var Category = require('../components/category.js');
var ArticleList = require('../components/articleList.js');

require('../../css/style.less');

class IndexPage extends React.Component{

	constructor(props){
		super(props);
		this.state={
			category:"全部"
		};

		this.handleShowMenu=this.handleShowMenu.bind(this);
		this.handleHideMenu=this.handleHideMenu.bind(this);
		this.getCategoryItem=this.getCategoryItem.bind(this);
	}

	getCategoryItem (value) {
		this.setState({category:value});
	}

	handleShowMenu () {
		ReactDOM.findDOMNode(this.refs.menu).style.width="200px";
		ReactDOM.findDOMNode(this.refs.menu).style.right="0px";
	}

	handleHideMenu () {
		ReactDOM.findDOMNode(this.refs.menu).style.width="0px";
		ReactDOM.findDOMNode(this.refs.menu).style.right="200px";
	}

	render (){
		return (
				<section className='page-home'>
					<Category ref="menu" getCategory={this.getCategoryItem} handleHideMenu={this.handleHideMenu} />
					<ArticleList category={this.state.category} handleShowMenu={this.handleShowMenu} />
				</section>
			)
	}
}

ReactDOM.render(<IndexPage />,document.querySelector("#section"));