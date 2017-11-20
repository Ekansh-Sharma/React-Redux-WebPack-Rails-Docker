import {connect} from 'react-redux';
import IndexComponent from '../components/posts/index'

function mapStateToProps(state){
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(IndexComponent);