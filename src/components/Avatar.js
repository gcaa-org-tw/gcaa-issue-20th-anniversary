function Avatar(props) {
  return (
    <div class="mx-auto p-2 text-center">
      <img className="Avatar"
        src={props.avatarUrl}
        style={{ width: '80px', height: '80px', borderRadius: '50%', fill: 'grey' }}
        alt={props.name}
      />
      <div class="py-2">{props.name}</div>
    </div>
  );
}

export default Avatar
