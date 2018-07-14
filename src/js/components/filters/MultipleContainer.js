import { connect } from 'react-redux';

import { applyFilter } from '../../action/Filters';
import Multiple from './Multiple';

const mapDispatchToProps = dispatch => ({
    applyFilter: (filter, data, filterKey) => dispatch(applyFilter(filter, data, filterKey))
});

export default connect(null, mapDispatchToProps)(Multiple);