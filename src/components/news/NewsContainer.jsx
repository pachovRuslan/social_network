import { connect } from 'react-redux';

import News from './News';

let mapStateToProps = (state) => {
  return{
    state:state
  }
}
const NewContainer = connect (mapStateToProps) (News);

export default NewContainer