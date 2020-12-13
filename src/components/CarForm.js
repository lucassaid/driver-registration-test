import { Form, Input, Select, InputNumber } from 'antd';
import brands from '../lib/brands'
import FormContainer from './FormContainer'

const currentYear = new Date().getFullYear()

const UserForm = ({onFinish, initialValues}) => {
  
  return(
    <FormContainer
      onFinish={onFinish}
      initialValues={initialValues}
    >
      <Form.Item
        name="carDomain"
        rules={[{ required: true, message: 'Debes ingresar la patente' }]}
        label="Patente"
        help="Sin espacios"
      >
        <Input placeholder="Patente" />
      </Form.Item>
      <Form.Item
        name="brand"
        rules={[{ required: true, message: 'Debes ingresar la marca' }]}
        label="Marca"
      >
        <Select
          showSearch
          placeholder="Select a person"
          optionFilterProp="children"
          filterOption={(input, option) =>
            option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
          options={brands}
        />
      </Form.Item>
      <Form.Item
        name='year'
        label="Año"
        rules={[{ required: true, message: 'Debes ingresar el año' }]}
      >
        <InputNumber
          style={{width: '100%'}}
          placeholder={2018}
          min={1960}
          max={currentYear}
        />
      </Form.Item>
      <Form.Item
        name='model'
        label="Modelo"
        rules={[{ required: true, message: 'Debes ingresar el modelo' }]}
      >
        <Input placeholder="Modelo"/>
      </Form.Item>
    </FormContainer>
  )
}

export default UserForm