import { Form, Button } from 'antd';

const FormContainer = ({onFinish, initialValues, children, className}) => (
  <Form
    layout="vertical"
    className={className}
    requiredMark={false}
    onFinish={onFinish}
    size="large"
    initialValues={initialValues}
  >
    {children}
    <Form.Item className="right">
      <Button
        shape="round"
        type="primary"
        htmlType="submit"
      >
        Siguiente
      </Button>
    </Form.Item>
  </Form>
)
export default FormContainer