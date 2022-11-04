import React from "react";
import { Container, Row, Col, Button, Tabs, Tab, Table} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faUser } from "@fortawesome/free-solid-svg-icons";

import "./Dashboard.scss";

const Dashboard = ({ className = false }) => {
    const latestData = [
        {date: "22/07", description:"SAQUE 24h 012345", value:"300,00"},
        {date: "21/07", description:"SUPERMERCADO 24h 02323626", value:"275,00"},
        {date: "21/07", description:"NETFLIX 5433626", value:"30,00"},
        {date: "21/07", description:"FARMACIA 24h 023874", value:"100,00"},
    ];
    
    const futureData = [
        {date: "05/08", description:"SALÁRIO 012345", value:"4500,00"},
        {date: "08/08", description:"PIX", value:"50,00"},
        {date: "10/08", description:"CASHBACK", value:"10,00"},
    ];

    return (
    <Container className={`dashboard py-5 ${className ? className : ''}`}>
        <Row>
            <Col xs={12} lg={4}>
                <Row className="align-items-center mb-5">
                    <Col xs={3}>
                        <span className="dashboard__user-avatar">
                            <FontAwesomeIcon icon={faCircle} size='5x' color='#f8f9fa' />
                            <FontAwesomeIcon
                            className='dashboard__user-icon'
                            icon={faUser}
                            size='3x'
                            color='#7c7d7d'
                            />
                        </span>
                    </Col>
                    <Col xs={9}>
                        <h4>João Vitor</h4>
                        <p className="text-muted">agg: 1234 c/c: 4321-5</p>
                    </Col>
                </Row>
                <Button className="dashboard__button dashboard__button--active text-left" variant="link" size="lg" block>
                    Minha Conta
                </Button>
                <Button className="dashboard__button text-left" variant="link" size="lg" block>
                    Pagamentos
                </Button>
                <Button className="dashboard__button text-left" variant="link" size="lg" block>
                    Extrato
                </Button>
            </Col>
            <Col xs={12} lg={3} className="mt-lg-5 pt-lg-4" >
                <h3 className="my-5">Conta Corrente</h3>
                <h6>
                    <strong>Saldo em conta corrente</strong> 
                </h6>
                <h4 className="text-success mb-4">
                    <small>R$</small>4.000<small>,00</small>
                </h4>
                <h6>
                    <strong>Cheque especial</strong>
                </h6>
                <p className="mb-0">Limite disponivel</p>
                <p className="mb-4">R$ 8.000,00</p>
                <Button>Ver extrato</Button>
            </Col>
            <Col xs={12} lg={5} className="mt-lg-5 pt-lg-5">
                <Tabs className="mt-5 pt-lg-5" defaultActiveKey="latest">
                    <Tab eventKey="latest" title="Últimos lançamentos">
                        <Table striped borderlass>
                            <thead>
                                <tr>
                                    <th>Data</th>
                                    <th>Descrição</th>
                                    <th>Valor (R$)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {latestData.map(({ date, description, value}) => (
                                    <tr>
                                        <td>{date}</td>
                                        <td>{description}</td>
                                        <td>{value}</td>
                                    </tr>
                                ))};
                            </tbody>
                        </Table>
                    </Tab>
                    <Tab eventKey="future" title="Lançamentos futuros">
                        <Table striped borderlass>
                            <thead>
                                <tr>
                                    <th>Data</th>
                                    <th>Descrição</th>
                                    <th>Valor (R$)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {futureData.map(({ date, description, value}) => (
                                    <tr>
                                        <td>{date}</td>
                                        <td>{description}</td>
                                        <td>{value}</td>
                                    </tr>
                                ))};
                            </tbody>
                        </Table>                        
                    </Tab>
                </Tabs>
            </Col>
        </Row>
    </Container>
);
    };

export default Dashboard;