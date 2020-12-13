import { motion } from 'framer-motion'
import check from '../images/check.svg'

const variants = {
  hidden: {scale: 0, rotate: 60},
  visible: {scale: 1, rotate: 0}
}

const transition = {
  delay: 0.2,
}

const imgStyle = {
  height: 200,
}

const CheckIcon = () => (
  <motion.img
    style={imgStyle}
    initial="hidden"
    animate="visible"
    variants={variants}
    transition={transition}
    src={check}
  />
)
export default CheckIcon