import logo from "../assets/logo.png";
import { Layout, Col, Menu, Row } from "antd";

const { Header } = Layout;

export default function Topbar() {
  return (
    <Header
      style={{
        position: "fixed",
        top: 0,
        zIndex: 10,
        width: "100%",
        backgroundColor: "white",
      }}
    >
      <Row>
        <Col span={8}>
          <Row>
            <Col>
              <img src={logo} width={60} className="mt-4 m-15" alt="Logo" />
            </Col>
            <Col className="hidden ml-1 font-bold text-blue-800 md:block">
              CIPTA KREATIF DWIPA
            </Col>
          </Row>
        </Col>
        <Col span={13}>
          <Menu
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            items={[
              { key: "1", label: "Beranda" },
              { key: "2", label: "Layanan" },
              { key: "3", label: "Tentang Kami" },
              { key: "4", label: "Artikel" },
              { key: "5", label: "Kontak" },
            ]}
          />
        </Col>
        <Col span={3}>
          <div className="flex items-end">
            <a href="https://api.whatsapp.com/send/?phone=6289324768590">
              <button className="bg-blue-600 text-white px-4 hover:bg-blue-700">
                Hubungi Kami
              </button>
            </a>
          </div>
        </Col>
      </Row>
    </Header>
  );
}
