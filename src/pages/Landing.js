import { Route, NavLink } from "react-router-dom";
import { Container, Row } from "react-bootstrap";

const styleLanding = {
  backgroundColor: 'grey',
  backgroundImage: 'url("img/concert/concert-1.jpg")',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '50%',
  backgroundSize: 'cover',
  overflow: 'hidden',
}

function Landing(props) {
  return (
    <Route>
      <div style={ styleLanding }>
          <Container fluid className="vh-100 align-middle">
            <NavLink to={`/speaks`} style={{ textDecoration: 'none' }}>
            <Row className="vh-100 align-items-center text-center">
              <h1 style={{
                color: 'white',
                textDecoration: 'none',
                fontWeight: '700',
                textShadow: '0 1px 1px rgba(0,0,0,.6)',
              }}>
                綠盟二十週年特刊
              </h1>
            </Row>
            </NavLink>
          </Container>
      </div>
    </Route>
  )
}

export default Landing
