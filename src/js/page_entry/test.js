var ArticleList = require('../components/articleList.js');

require('../../css/style.less');

class TestPage extends React.Component{

	constructor(props){
		super(props);
		this.state={
			category:"全部"
		};
	}

	render (){
		return (
				<section className='page-test'>
					<ArticleList category={this.state.category} />
				</section>
			)
	}
}

ReactDOM.render(<TestPage />,document.querySelector("#section"));