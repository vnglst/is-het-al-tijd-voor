'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Post = function Post(props) {
  console.log(props);
  return _react2.default.createElement('div', null, _react2.default.createElement('h1', null, 'Ja,'), _react2.default.createElement('span', null, 'en bij de AH kosten ze momenteel ', props.priceInfo.price));
};
// import Layout from '../components/MyLayout.js'


Post.getInitialProps = function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(context) {
    var res, priceInfo;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _isomorphicUnfetch2.default)('https://albert-heijn.now.sh/ah/price?productId=wi99045&productUrl=https://www.ah.nl/producten/product/wi99045/ah-asperges-wit');

          case 2:
            res = _context.sent;
            _context.next = 5;
            return res.json();

          case 5:
            priceInfo = _context.sent;

            console.log('Fetched price info: ' + priceInfo);
            return _context.abrupt('return', { priceInfo: priceInfo });

          case 8:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = Post;