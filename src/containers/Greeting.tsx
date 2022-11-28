import Greeting       from "../components/Greeting";
import * as actions   from "../actions";
import { StoreState } from "../types";
import { connect, useDispatch }    from "react-redux";

const dispatch = useDispatch();

export function mapStateToProps({ enthusiasmLevel, languageName}: StoreState) {
     return {
          enthusiasmLevel,
          name: languageName,
     }
}

export function mapDispatchToProps() {
     return {
          onIncrement: () => dispatch(actions.incrementEnthusiasm()),
          onDecrement: () => dispatch(actions.decrementEnthusiasm()),
     }
}

export default connect(mapStateToProps, mapDispatchToProps)(Greeting)