import Screen from '../components/Screen'
import UserForm from '../components/UserForm'
import Header from '../components/Header'
import userImage from '../images/user.svg'
import useDriverUpdate from '../lib/useDriverUpdate'
import { routes }  from '../lib/consts'

const UserData = () => {

  const [driver, updateDriver] = useDriverUpdate(routes.CAR_DATA)

  return (
    <Screen>
      <Header
        back={routes.HOME}
        image={userImage}
        title="Tus datos:"
      />
      <UserForm
        initialValues={driver}
        onFinish={updateDriver}
      />
    </Screen>
  )
};

export default UserData