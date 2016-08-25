
class ArticleList extends React.Component{

	constructor(props){
		super(props);
		this.state={

		};
	}

	componentWillReceiveProps(nextProps){

	}

	render(){
		let articleList = this.props.articleList.map((item,i)=>{
			return (<ListItem key={i} title={item.title} intro={item.intro} />)
		});
		return (
				<section className="article-list">
					<img className="icon-menu" onClick={this.props.handleShowMenu} src={require('../../img/icon-menu.png')} />
					<h1>{this.props.category}</h1>
					{articleList}
				</section>
			)
	}
}

ArticleList.defaultProps={
	category:'全部',
	articleList:[
		{title:"文章标题",intro:"主要介绍html的标准规范"},
		{title:"文章标题",intro:"主要介绍html的标准规范"},
		{title:"文章标题",intro:"主要介绍html的标准规范"}
	]
}

ArticleList.propsType={

}

class ListItem extends React.Component{
	render(){
		return (
				<div>
					<h2>{this.props.title}</h2>
					<p>{this.props.intro}</p>
				</div>

			)
	}
}

module.exports=ArticleList;