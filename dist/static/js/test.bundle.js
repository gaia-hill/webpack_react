webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React, ReactDOM) {'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ArticleList = __webpack_require__(176);
	
	__webpack_require__(178);
	
	var TestPage = function (_React$Component) {
		_inherits(TestPage, _React$Component);
	
		function TestPage(props) {
			_classCallCheck(this, TestPage);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TestPage).call(this, props));
	
			_this.state = {
				category: "全部"
			};
			return _this;
		}
	
		_createClass(TestPage, [{
			key: 'render',
			value: function render() {
				return React.createElement(
					'section',
					{ className: 'page-test' },
					React.createElement(ArticleList, { category: this.state.category })
				);
			}
		}]);
	
		return TestPage;
	}(React.Component);
	
	ReactDOM.render(React.createElement(TestPage, null), document.querySelector("#section"));
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(34)))

/***/ },

/***/ 176:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React) {"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ArticleList = function (_React$Component) {
		_inherits(ArticleList, _React$Component);
	
		function ArticleList(props) {
			_classCallCheck(this, ArticleList);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ArticleList).call(this, props));
	
			_this.state = {};
			return _this;
		}
	
		_createClass(ArticleList, [{
			key: "componentWillReceiveProps",
			value: function componentWillReceiveProps(nextProps) {}
		}, {
			key: "render",
			value: function render() {
				var articleList = this.props.articleList.map(function (item, i) {
					return React.createElement(ListItem, { key: i, title: item.title, intro: item.intro });
				});
				return React.createElement(
					"section",
					{ className: "article-list" },
					React.createElement("img", { className: "icon-menu", onClick: this.props.handleShowMenu, src: __webpack_require__(177) }),
					React.createElement(
						"h1",
						null,
						this.props.category
					),
					articleList
				);
			}
		}]);
	
		return ArticleList;
	}(React.Component);
	
	ArticleList.defaultProps = {
		category: '全部',
		articleList: [{ title: "文章标题", intro: "主要介绍html的标准规范" }, { title: "文章标题", intro: "主要介绍html的标准规范" }, { title: "文章标题", intro: "主要介绍html的标准规范" }]
	};
	
	ArticleList.propsType = {};
	
	var ListItem = function (_React$Component2) {
		_inherits(ListItem, _React$Component2);
	
		function ListItem() {
			_classCallCheck(this, ListItem);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(ListItem).apply(this, arguments));
		}
	
		_createClass(ListItem, [{
			key: "render",
			value: function render() {
				return React.createElement(
					"div",
					null,
					React.createElement(
						"h2",
						null,
						this.props.title
					),
					React.createElement(
						"p",
						null,
						this.props.intro
					)
				);
			}
		}]);
	
		return ListItem;
	}(React.Component);
	
	module.exports = ArticleList;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },

/***/ 177:
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeAQMAAAAB/jzhAAAABlBMVEUAAACAgICSabkkAAAAAXRSTlMAQObYZgAAABRJREFUCNdjwA/Y//9vQBA0UoIJANfuFq4bahzSAAAAAElFTkSuQmCC"

/***/ },

/***/ 178:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});
//# sourceMappingURL=test.bundle.js.map