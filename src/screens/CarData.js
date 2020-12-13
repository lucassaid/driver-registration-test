import Screen from '../components/Screen'
import CarForm from '../components/CarForm'
import carImage from '../images/car.svg'
import Header from '../components/Header'
import useDriverUpdate from '../lib/useDriverUpdate'
import { routes }  from '../lib/consts'

const CarData = () => {

  const [driver, updateDriver] = useDriverUpdate(routes.FINAL, true)

  return (
    <Screen>
      <Header
        back={routes.USER_DATA}
        image={carImage}
        title="Datos del vehículo"
      />
      <CarForm
        initialValues={driver}
        onFinish={updateDriver}
      />
    </Screen>
  )
};

export default CarData