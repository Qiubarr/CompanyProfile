import logo from "../assets/logo.png";
import { Layout, Col, Menu, Row } from "antd";
import { Link } from "react-router-dom";


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
            <Link to="/Dashboard">
              <img src={logo} width={60} className="mt-4 m-15" alt="Logo" />
              </Link>
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
              { key: "1", label: (<Link to="./dashboard"> Beranda </Link>)},
              { key: "2", label: (<Link to="./layanan"> Layanan </Link>)},
              { key: "3", label: (<Link to="./tentang"> Tentang Kami </Link>)},
              { key: "4", label: (<Link to="./Artikel"> Artikel </Link>)},
              { key: "5", label: (<Link to="./Galeri"> Galeri </Link>)},
              { key: "6", label: (<Link to="./kontak"> Kontak</Link>)},
            ]}
          />
        </Col>
        <Col span={3}>
          <div className="md:flex items-end hidden">
            <a href="https://api.whatsapp.com/send/?phone=6289324768590">
              <button className="bg-blue-600 text-white px-4 hover:bg-blue-700">
                Hubungi Kami
              </button>
            </a>
          </div>
          <div className="md:hidden items-end flex">
            <a href="https://api.whatsapp.com/send/?phone=6289324768590">
              <button className="bg-blue-600 text-white px-4 hover:bg-blue-700 flex-wrap">
                Hubungi 
              </button>
            </a>
          </div>
        </Col>
      </Row>
    </Header>
  );
}
