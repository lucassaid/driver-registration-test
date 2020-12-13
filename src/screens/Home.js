import Screen from '../components/Screen'
import Header from '../components/Header'
import home from '../images/home.svg'
import { routes }  from '../lib/consts'
import { Form, Input, Typography } from 'antd';
import useDriverUpdate from '../lib/useDriverUpdate'
import FormContainer from '../components/FormContainer'

const { Text } = Typography

const Home = () => {

  const [driver, updateDriver] = useDriverUpdate(routes.USER_DATA)

  return (
    <Screen className="center mt-20">
      <Header
        image={home}
        title="Bienvenido!"
        className="center"
        titleStyle={{marginBottom: 0}}
      />
      <Text>Para empezar necesitamos tu nombre completo:</Text>
      <FormContainer
        className="mt-20"
        onFinish={updateDriver}
        initialValues={driver}
      >
        <Form.Item
          name="name"
          rules={[{ required: true, message: 'Ingresa tu nombre' }]}
        >
          <Input autoComplete="name" placeholder="Nombre completo" />
        </Form.Item>
      </FormContainer>
    </Screen>
  )
};

export default Home