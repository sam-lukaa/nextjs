import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar/index";
import Card from "../components/Card/index";

export default function Home() {
  const styles = {
    width: "100%",
  };
  return (
    <Layout title="HelperDev">
      <Navbar />

      <div style={styles}>
        <Sidebar />
        <Card style={{ width: "35%" }} />
      </div>
    </Layout>
  );
}
