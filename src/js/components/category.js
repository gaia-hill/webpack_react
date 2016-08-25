
class Category extends React.Component{
	componentDidMount(){
		let vm=this;
		let oLi = document.querySelectorAll("nav li");
		for(let i=0;i<oLi.length;i++){
			oLi[i].onclick=function(){
				vm.props.getCategory(this.innerHTML);
			}
		}
	}
	render(){
		return (
				<nav>
					<img className="icon-close" onClick={this.props.handleHideMenu} src={require('../../img/icon-close.png')} />
					<ul>
						<li className="first-child">全部</li>
						<li>html5</li>
						<li>css3</li>
						<li>gulp</li>
						<li>webpack</li>
						<li>react</li>
						<li>ES6</li>
					</ul>
				</nav>
			)
	}
}

module.exports=Category;