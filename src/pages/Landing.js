import {
  Route,
  NavLink,
} from "react-router-dom";

function Landing(props) {
  return (
    <Route>
      <div>
        <h2>Home</h2>
        <NavLink to={`/speaks`}>系列講座</NavLink>
        <NavLink to={`/concert`}>綠盟20週年感恩音樂會</NavLink>
      </div>
    </Route>    
  )
}

export default Landing
