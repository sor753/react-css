export const InlineStyle = () => {
  const containerStyle = {
    border: "solid 1px #000000",
    borderRadius: "20px",
    padding: "8px",
    margin: "8px",
    textAlign: "center"
  };
  const titleStyle = {
    fontSize: "24px",
    fontWeight: "bold"
  };
  return (
    <div style={containerStyle}>
      <p style={titleStyle}>- Inline Style -</p>
      <button>FIGHT!!</button>
    </div>
  );
};
