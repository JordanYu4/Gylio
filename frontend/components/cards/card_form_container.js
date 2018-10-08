import { connect } from 'react-redux';
import CardForm from './card_form';

import { createCard } from '../../actions/card_actions';
import { editList } from '../../actions/list_actions';
// import { selectList } from '../../reducers/selectors';

const mapStateToProps = (state) => {

};

const mapDispatchToProps = dispatch => ({
  
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(CardForm);