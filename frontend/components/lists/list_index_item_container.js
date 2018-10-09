import { connect } from 'react-redux';
import ListIndexItem from 'list_index_item';

import {
  
} from '../../actions/card_actions';
import {
  editList, 
  deleteList
} from '../../actions/list_actions';


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListIndexItem);