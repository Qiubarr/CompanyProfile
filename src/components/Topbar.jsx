import logo from "../assets/logo.png";
import { Layout, Col, Menu, Row } from "antd";

const { Header } = Layout;

export default function Topbar() {
  return (
    <Header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 1,
            width: "100%",
            backgroundColor: "white",
          }}
        >
          <Row>
            <Col span={6}>
              <Row>
                <Col>
                  <img
                    src={logo}
                    width={60}
                    className="mt-4 m-15"
                    alt="Logo"
                  />
                </Col>
                <Col className="hidden ml-1 font-bold text-blue-800 md:block">
                  CIPTA KREATIF DWIPA
                </Col>
              </Row>
            </Col>
            <Col span={12}>
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
            <Col span={6}>
              <Row className="flex justify-end">
                <Col className="hover:text-blue-600">Daftar</Col>
                <Col className="ml-5 hover:text-blue-600">Masuk</Col>
              </Row>
            </Col>
          </Row>
        </Header>
  );
}
