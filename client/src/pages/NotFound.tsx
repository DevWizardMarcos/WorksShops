import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#000000",
      color: "#ffffff",
      padding: "2rem",
      textAlign: "center"
    }}>
      <h1 style={{
        fontSize: "4rem",
        fontWeight: "800",
        marginBottom: "1rem",
        color: "#C63D2D"
      }}>
        404
      </h1>
      <h2 style={{
        fontSize: "2rem",
        marginBottom: "1rem",
        fontWeight: "600"
      }}>
        Página não encontrada
      </h2>
      <p style={{
        fontSize: "1.125rem",
        color: "#BFBFBF",
        marginBottom: "2rem",
        maxWidth: "500px"
      }}>
        Desculpe, a página que você está procurando não existe ou foi movida.
      </p>
      <button
        onClick={() => setLocation("/")}
        style={{
          padding: "0.875rem 2rem",
          backgroundColor: "#C63D2D",
          color: "#ffffff",
          border: "none",
          borderRadius: "0.5rem",
          fontSize: "1rem",
          fontWeight: "600",
          cursor: "pointer",
          transition: "all 0.3s ease"
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#a02d1f";
          e.currentTarget.style.transform = "translateY(-2px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "#C63D2D";
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        Voltar para Home
      </button>
    </div>
  );
}
