const CardsBarWrapper = ({ children }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "40px" }}>
      {children}
    </div>
  );
};

export default CardsBarWrapper;
