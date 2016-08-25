
class Article extends React.Component{

	constructor(props){
		super(props);
		this.state={
			title:props.title,
			date:props.date,
			category:props.category,
			content:props.content

		};
	}

	componentWillReceiveProps(nextProps){

	}

	render(){
		return (
				<section className="article-detail">
					
				</section>
			)
	}
}

module.exports=Article;