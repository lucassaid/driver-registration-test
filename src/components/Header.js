import { Link } from "react-router-dom";
import ScreenImage from '../components/ScreenImage'
import { Typography, Button } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'

const { Title } = Typography

const Header = ({back, title, image, className, titleStyle}) => (
  <div className={className}>

    {back && (
      <Link to={back}>
        <Button
          icon={<ArrowLeftOutlined/>}
          size="large"
          shape="circle"
        />
      </Link>
    )}

    <ScreenImage image={image}/>

    <Title level={2} className="mt-20" style={titleStyle}>
      {title}
    </Title>

  </div>
)
export default Header