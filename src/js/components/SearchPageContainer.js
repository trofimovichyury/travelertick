import { connect } from 'react-redux';
import SearchPage from './SearchPage';

const mapStateToProps = state => ({
    data: state.search
});

export default connect(mapStateToProps)(SearchPage);
