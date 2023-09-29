import logo from "../assets/logo.png";
import { Layout, Col, Menu, Row } from "antd";
import { Link } from "react-router-dom";

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
                <Link
                    to="/Dashboard">
                  <img 
                    to="/Dashboard"
                    src={logo}
                    width={60}
                    className="mt-4 m-15"
                    alt="Logo"
                  />
                  </Link>
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
                  { key: "1", label: (<Link to="./dashboard"> Beranda </Link>)},
                  { key: "2", label: (<Link to="./layanan"> Layanan </Link>)},
                  { key: "3", label: (<Link to="./tentang"> Tentang Kami </Link>)},
                  { key: "4", label: (<Link to="./Artikel"> Artikel </Link>)},
                  { key: "5", label: (<Link to="./Galeri"> Galeri </Link>)},
                  { key: "6", label: (<Link to="./kontak"> Kontak</Link>)},

                ]}
              />
            </Col>
            <Col span={6}>
              </Col>
          </Row>
        </Header>
  );
}
