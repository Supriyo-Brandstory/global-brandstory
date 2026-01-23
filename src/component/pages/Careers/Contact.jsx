export const Contact = () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <h2 style={styles.title}>Didn’t see your job title?</h2>
        <p style={styles.sub}>
          Tell Us What You Want To Build With Us.
        </p>
        <p style={styles.mail}>
          Send Your Resume And A Quick Note To <span style={styles.highlight}>careers@brandstorydigital.com</span>
        </p>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    width: "100%",
    background: "#0F0F0F",
    padding: "50px 20px 80px 20px",
    display: "flex",
    justifyContent: "center",
  },
  container: {
    maxWidth: "1200px",
    textAlign: "center",
    color: "#fff",
  },
  title: {
    fontSize: "40px",
    fontWeight: "700",
    marginBottom: "20px",
  },
  sub: {
    fontSize: "20px",
    opacity: 0.9,
    marginBottom: "12px",
  },
  mail: {
    fontSize: "18px",
    opacity: 0.9,
  },
  highlight: {
    fontWeight: "700",
  },
};
