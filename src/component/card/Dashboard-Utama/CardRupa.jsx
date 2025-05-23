import React, { useState } from "react";
import { Row, Col, Card, Button, Modal } from "antd";
import InvestasiEksploitasi from "../../chart/InvestasiEksploitasi";
import InvestasiRealRupa from "../../chart/InvestasiRealRupa";
import EksploitasiRealRupa from "../../chart/EksploitasiRealRupa";
import TenderTerbatas from "../../chart/TenderTerbatas";
import PenunjukkanLangsung from "../../chart/PenunjukkanLangsung";
import TenderPenunjukkanLangsung from "../../chart/TenderPenunjukkanLangsung";
import { CheckCircleOutlined, TeamOutlined, BarChartOutlined } from "@ant-design/icons";
import CountUp from 'react-countup';

export default function CardIsi() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const showModal = (contentType) => {
    setModalContent(contentType);
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const renderModalContent = () => {
    console.log(modalContent);
    switch (modalContent) {
      case 1:
        return <InvestasiEksploitasi detailMode={true} />;
      case 2:
        return <InvestasiRealRupa detailMode={true} />;
      case 3:
        return <EksploitasiRealRupa detailMode={true} />;
      case 4:
        return <TenderTerbatas detailMode={true} />;
      case 5:
        return <PenunjukkanLangsung detailMode={true} />;
      case 6:
        return <TenderPenunjukkanLangsung detailMode={true} />;
      default:
        return <p style={{ color: "white" }}>Tidak ada konten.</p>;
    }
  };

  return (
    <div>
      {[
        {
          title: "REGIONAL 2",
          // card 1
          titleCard1: "RUPA REGIONAL 2 (SETAHUN)",
          persentase1: 30,
          paket1: 45,
          nominal1: 20000000,
          icon1: TeamOutlined,
          
          //   card 2
          titleCard2: "CHART PAKET REGIONAL 2",
          modal2: 1,
          ChartCard2: InvestasiRealRupa,
          
          //   card 3
          titleCard3: "PAKET SELESAI (SD)",
          persentase3: 30,
          paket3: 45,
          nominal3: 20000000,
          icon3: CheckCircleOutlined,
          
          //   card 4
          titleCard4: "CHART CHART NILAI PAKET REGIONAL 2",
          modal4: 2,
          ChartCard4: InvestasiRealRupa,
          
        },
        {
          title: "KSO (EKS. N2)",
          // card 1
          titleCard1: "RUPA KSO (EKS. N2) (SETAHUN)",
          persentase1: 50,
          paket1: 25,
          nominal1: 50000000,
          icon1: BarChartOutlined,
          
          //   card 2
          titleCard2: "CHART PAKET KSO",
          ChartCard2: InvestasiRealRupa,
          modal2: 4,
          
          //   card 3
          titleCard3: "PAKET SELESAI (SD)",
          persentase3: 30,
          paket3: 45,
          nominal3: 20000000,
          icon3: CheckCircleOutlined,
          
          //   card 4
          titleCard4: "CHART NILAI PAKET KSO",
          ChartCard4: InvestasiRealRupa,
          modal4: 5,
        },
      ].map((item, index) => (
        <div key={index}>
          <h1 style={{color:"black"}}>{item.title}</h1>
          <Row gutter={10} style={{ marginBottom: "2vh" }}>
            <Col span={11}>
              <Card
                className="card-hover"
                style={{
                  backgroundColor: "#e0f2fe",
                  overflow: "hidden",
                }}
              >
                <div className="container">
                  <div className="container-top-card">
                    <p className="title">{item.titleCard1}</p>
                    <p className="persentase"><CountUp end={item.persentase1} duration={2} />%</p>
                  </div>
                  <div className="container-row-2">
                    <item.icon1
                      style={{
                        fontSize: "6vh",
                        marginLeft: "10%",
                        // marginBottom: 40,
                      }}
                    />
                    <h2 className="paket"><CountUp end={item.paket1} duration={2} /> Paket</h2>
                  </div>
                  <div className="text-paket">
                    <h2 className="nominal">Rp.<CountUp end={item.nominal1} duration={2} /></h2>
                  </div>
                </div>
              </Card>

              <Card
                className="card-hover"
                style={{
                  backgroundColor: "#fef08a",
                  marginBottom: 16,
                  overflow: "hidden",
                }}
              >
                <div className="container">
                  <div className="container-top-card">
                    <p className="title">
                      {item.titleCard2} <br />
                      (REAL VS RUPA)
                    </p>
                    <Button
                      className="detail-btn"
                      type="primary"
                      onClick={() => showModal(item.modal2)}
                    >
                      Lihat Detail
                    </Button>
                  </div>
                  {React.createElement(item.ChartCard2, { detailMode: false })}
                </div>
              </Card>
            </Col>

            <Col span={10}>
              <Card
                className="card-hover"
                style={{
                  backgroundColor: "#fbcfe8",
                  marginBottom: 16,
                  overflow: "hidden",
                }}
              >
                <div className="container">
                  <div className="container-top-card">
                    <p className="title">{item.titleCard3}</p>
                    <p className="persentase"><CountUp end={item.persentase3} duration={2} />%</p>
                  </div>
                  <div className="container-row-2">
                    <item.icon3
                      style={{
                        fontSize: "6vh",
                        marginLeft: "10%",
                        marginBottom: 40,
                      }}
                    />
                    <h2 className="paket"><CountUp end={item.paket3} duration={2} /> Paket</h2>
                  </div>
                  <div className="text-paket">
                    <h2 className="nominal">Rp.<CountUp end={item.nominal3} duration={2} /></h2>
                  </div>
                </div>
              </Card>

              <Card
                className="card-hover"
                style={{
                  backgroundColor: "#f5f0ff",
                  marginBottom: 16,
                  overflow: "hidden",
                }}
              >
                <div className="container">
                  <div className="container-top-card">
                    <p className="title">
                      {item.titleCard4} <br />
                      (REAL VS RUPA)
                    </p>
                    <Button
                      className="detail-btn"
                      type="primary"
                      onClick={() => showModal(item.modal4)}
                    >
                      Lihat Detail
                    </Button>
                  </div>
                  {React.createElement(item.ChartCard4, { detailMode: false })}
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      ))}
      <Modal
        title="Detail"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={900}
        styles={{
          body: { backgroundColor: "#2c3e50", height: "70vh" },
        }}
      >
        {renderModalContent()}
      </Modal>
    </div>
  );
}
