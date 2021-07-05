import { Col } from "react-bootstrap";

function Avatar(props) {
  return (
    <Col xs="6" className="mx-auto p-2 text-center">
      <img className="Avatar"
        src={props.avatarUrl}
        style={{ width: '80px', height: '80px', borderRadius: '50%', fill: 'grey' }}
        alt={props.name}
      />
      {props.desc ? (
        <div class="py-2">
          <div>{props.name}</div>
          <div class="p-1" style={{ fontSize: '0.8em' }}>{props.desc}</div>
        </div>
      ) : (
        <div class="py-2">{props.name}</div>
      )}
    </Col>
  );
}

export default Avatar
