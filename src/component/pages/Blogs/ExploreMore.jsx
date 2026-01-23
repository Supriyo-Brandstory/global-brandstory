import { px } from "framer-motion";

export const ExploreMore = () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <h2 style={styles.title}>Didn’t find what you were looking for?</h2>
        <p style={styles.sub}>
          Tell us what you want to learn, build, or explore.
        </p>
        <p style={styles.mail}>
           We’re always thinking—and writing—about what’s next.
        </p>
        <button style={styles.btn}>Explore More Insights</button>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    width: "100%",
    background: "#000",
    padding: "50px 20px 80px 20px",
    display: "flex",
    justifyContent: "center",
  },
  container: {
    maxWidth: "600px",
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
  btn:{
    margin: '20px 0 0 0',
    background: "#E73E25",
    padding: '12px 30px',
    borderRadius: '20px',
  }
};
