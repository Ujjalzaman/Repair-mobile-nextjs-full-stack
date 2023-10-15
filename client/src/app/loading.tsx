import { Row, Space, Spin } from "antd";

const loading = () => {
  return (
    <Row
      justify="center"
      align="middle"
      style={{ height: "100vh" }}
    >
      <Space>
        <Spin tip="Loading" size='large' />
      </Space>
    </Row>
  )
}

export default loading;