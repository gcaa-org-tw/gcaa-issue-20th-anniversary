import {
  Route,
  NavLink,
} from "react-router-dom";

function Landing(props) {
  return (
    <Route>
      <div class="container-fluid vh-100 align-middle">
        <div class="text-center align-middle">
          <h1>Home</h1>
        </div>
        <div class="text-center align-middle">
          <NavLink to={`/speaks`}>系列講座</NavLink>
          <NavLink to={`/concert`}>綠盟20週年感恩音樂會</NavLink>
        </div>
      </div>
    </Route>    
  )
}

export default Landing
