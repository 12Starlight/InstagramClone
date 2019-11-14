import { connect } from "react-redux";
import Nav from "./nav";


// mapStateToProps
const mapStateToProps = (state, ownProps) => {
  // debugger; 

  return({
    userId: state.session.id 
  })
};

// mapDispatchToProps
const mapDispatchToProps = (dispatch) => {
  return({

  })
};


export default connect(mapStateToProps, mapDispatchToProps)(Nav);