import { Link } from "react-router-dom";
import Screen from '../components/Screen'
import { Spin, Typography, Button, Popconfirm } from 'antd'
import {
  driverCreationStateSelector,
  driverDataSelector
} from '../slices/driverSlice'
import { useSelector } from 'react-redux'
import CheckIcon from '../components/CheckIcon'
import ErrorIcon from '../components/ErrorIcon'
import { routes }  from '../lib/consts'

const { Title, Text } = Typography

const successButton = (
  <>
    <Link to={routes.HOME}>
      <Button
        size="large"
        shape="round"
        className="mt-20"
        style={{marginRight: 10}}
      >
        Volver al inicio
      </Button>
    </Link>
    <Popconfirm
      title="Aquí termina esta demo :)"
      cancelButtonProps={{style: {display: 'none'}}}
    >
      <Button
        size="large"
        type="primary"
        shape="round"
        className="mt-20"
      >
        Ir a mi perfil
      </Button>
    </Popconfirm>
  </>
)

const linkToHome = (
  <Link to={routes.HOME}>
    <Button
      size="large"
      shape="round"
      className="mt-20"
    >
      Intentar otra vez
    </Button>
  </Link>
)

const states = {
  loading: () => ({
    header: Spin,
    title: 'Creando usario',
  }),
  success: (name) => ({
    header: CheckIcon,
    title: 'Usuario creado!',
    desc: `Hola ${name}, ya podés empezar a usar tu cuenta.`,
    buttons: successButton,
  }),
  error: () => ({
    header: ErrorIcon,
    title: 'Ocurrió un error',
    buttons: linkToHome
  })
}

const headerStyles = {
  height: 200,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}
 
const Final = () => {
  const driver = useSelector(driverDataSelector)
  const creationState = useSelector(driverCreationStateSelector)
  
  if(creationState == 'idle') return null

  const state = states[creationState](driver.name)

  return (
    <Screen className="center mt-20" delay={0.3}>
      <div style={headerStyles}>
        <state.header/>
      </div>
      <Title
        className="mt-20"
        style={{marginBottom: 0}}
      >
        {state.title}
      </Title>
      <Text>{state.desc}</Text>
      <div>{state.buttons}</div>
    </Screen>
  )
}
export default Final