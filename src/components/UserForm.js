import { Form, Input, DatePicker } from 'antd';
import { validateEmail } from '../lib/utils'
import FormContainer from './FormContainer'
import moment from 'moment'

const dateFormat = 'DD/MM/YYYY'

const UserForm = ({onFinish, initialValues = {}}) => {

  const preFinish = fieldsValue => {
    const values = {
      ...fieldsValue,
      birthdate: fieldsValue.birthdate.format(dateFormat)
    }
    onFinish(values)
  }

  let formatedInitialValues = { ...initialValues }
  const { birthdate } = formatedInitialValues

  if(birthdate) {
    formatedInitialValues.birthdate = moment(birthdate, dateFormat)
  }
  
  return(
    <FormContainer
      onFinish={preFinish}
      initialValues={formatedInitialValues}
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
      <Form.Item
        name="birthdate"
        rules={[{
          required: true,
          message: 'Debes ingresar la fecha de nacimiento',
          type: 'object'
        }]}
        label="Fecha de nacimiento"
      >
        <DatePicker placeholder="20/03/1995" format={dateFormat}/>
      </Form.Item>
    </FormContainer>
  )
}

export default UserForm