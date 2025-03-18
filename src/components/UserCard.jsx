const UserCard = ({ nombre, edad, imagen }) => {
  return (
    <div style={styles.card}>
      <img src={imagen} alt={nombre} style={styles.image} />
      <h2>{nombre}</h2>
      <p>Edad: {edad} años</p>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ccc",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    width: "200px",
    margin: "10px auto",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  },
  image: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
  },
};

export default UserCard;
