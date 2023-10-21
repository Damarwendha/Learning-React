function Button({ onClick, disabled, text }) {
  return (
    <p>
      <button onClick={onClick} disabled={disabled}>
        {text}
      </button>
    </p>
  );
}

export default Button;
