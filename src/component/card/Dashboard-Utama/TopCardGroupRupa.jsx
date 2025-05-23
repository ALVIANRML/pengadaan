// components/TopCardGroupRupa.jsx
import React from "react";
import { Row, Col, Card } from "antd";
import { LineChartOutlined } from "@ant-design/icons";
import CountUp from 'react-countup';
import "../../../assets/css/topCard.css"

export default function TopCardGroupRupa () {
  return (
    <Row gutter={10} style={{ marginBottom: "2vh" }}>
      {[
        { title: "RUPA SETAHUN", value: 30, nominal:200000 },
        { title: "PAKET SELESAI (SD)", value: 30, nominal:200000 },
        { title: "% CAPAIAN (REAL VS RUPA)", value: 30, nominal:200000 },
      ].map((item, index) => (
        <Col span={7} key={index}>
          <Card
            className="top-card"
            style={{
              marginBottom: 16,
              height: "30vh",
              overflow: "hidden",
            }}
          >
            <div className="container">
              <div className="container-top-card">
                <p className="title">{item.title}</p>
                <p className="show-icon">
                <p className="small-persentase"><CountUp end={item.value} duration={2} />%</p>
                </p>
              </div>
              <div className="container-row-2">
                
                <h1>Rp <CountUp end={item.nominal} duration={2} /></h1>
                
              </div>
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  );
};
