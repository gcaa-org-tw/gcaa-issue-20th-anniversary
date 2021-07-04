import {
  Route,
  NavLink,
} from "react-router-dom";

const styleLanding = {
  backgroundColor: 'grey',
  backgroundImage: 'url("img/landing.jpg")',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '50%',
  backgroundSize: 'cover',
  overflow: 'hidden',
}

function Landing(props) {
  return (
    <Route>
      <div style={ styleLanding }>
        {/* <div class="vh-100" style={{ background: 'radial-gradient(#bad04f, #0e353d)' }}> */}
          <div class="container-fluid vh-100 align-middle">
            <NavLink to={`/speaks`} style={{ textDecoration: 'none' }}>
            <div class="row vh-100 align-items-center text-center">
              <h1 style={{ 
                color: 'white', 
                textDecoration: 'none',
                fontWeight: '700',
                textShadow: '0 1px 1px rgba(0,0,0,.6)',
              }}>
                綠盟二十週年特刊
              </h1>
            </div>
            </NavLink>
          </div>
        {/* </div> */}
      </div>
    </Route>    
  )
}

export default Landing
