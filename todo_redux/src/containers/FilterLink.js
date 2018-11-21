import { connect } from 'react-redux';
import { Link } from '../components/Link';
import { setVisibilityFilters } from '../actions/index.action';



const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilters(ownProps.filter))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)