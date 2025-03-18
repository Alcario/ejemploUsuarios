import UserCard from "./components/UserCard";

function App() {
  return (
    <div style={styles.container}>
      <UserCard nombre="Ana Pérez" edad={25} imagen="https://randomuser.me/api/portraits/women/44.jpg" />
      <UserCard nombre="Carlos López" edad={30} imagen="https://randomuser.me/api/portraits/men/47.jpg" />
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    gap: "20px",
  }
};

export default App;
