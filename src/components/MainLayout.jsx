function MainLayout({ children }) {
  return (
    <div
      style={{
        background: "#f4f6f8",
        minHeight: "100vh",
        paddingTop: "20px",
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          background: "white",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default MainLayout;