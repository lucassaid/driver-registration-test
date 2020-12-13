import { Form, Input, Row, Col, InputNumber } from 'antd';
import { validateEmail } from '../lib/utils'
import FormContainer from './FormContainer'

const UserForm = ({onFinish, initialValues = {}}) => {

  const preFinish = fieldsValue => {
    const { birthDay, birthMonth, birthYear } = fieldsValue
    let values = {
      ...fieldsValue,
      birthdate: `${birthDay}/${birthMonth}/${birthYear}`
    }
    onFinish(values)
  }
  
  return(
    <FormContainer
      onFinish={preFinish}
      initialValues={initialValues}
    >
      <Form.Item
        name="email"
        rules={[{
          required: true,
          validateTrigger: 'onFinish',
          validator: validateEmail
        }]}
        label="Email"
      >
        <Input autoComplete="email" type="email" placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="phone"
        rules={[{
          required: true,
          message: 'Debes ingresar tu número de teléfono'
        }]}
        label="Teléfono"
      >
        <Input autoComplete="phone" type="string" />
      </Form.Item>
      <Form.Item label="Fecha de nacimiento">
        <Row gutter={16}>
          <Col xs={6} lg={4}>
            <Form.Item
              name="birthDay"
              rules={[{ required: true, message: '' }]}
            >
              <InputNumber style={{width: '100%'}} placeholder="Día" />
            </Form.Item>
          </Col>
          <Col xs={6} lg={4}>
            <Form.Item
              name="birthMonth"
              rules={[{ required: true, message: '' }]}
            >
              <InputNumber style={{width: '100%'}} placeholder="Mes" />
            </Form.Item>
          </Col>
          <Col xs={12} lg={8}>
            <Form.Item
              name="birthYear"
              rules={[{ required: true, message: '' }]}
            >
              <InputNumber style={{width: '100%'}} placeholder="Año" />
            </Form.Item>
          </Col>
        </Row>
      </Form.Item>
    </FormContainer>
  )
}

export default UserForm