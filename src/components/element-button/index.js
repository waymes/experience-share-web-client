function ElementButton({ children, onClick, ...other }) {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      onClick();
    }
  };
  return (
    <div
      onKeyDown={handleKeyDown}
      onClick={onClick}
      role="button"
      tabIndex="0"
      {...other}
    >{children}</div>
  );
}

export default ElementButton;
