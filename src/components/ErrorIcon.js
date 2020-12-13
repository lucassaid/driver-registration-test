import { motion } from 'framer-motion'

const variants = {
  hidden: {scale: 0, rotate: 180},
  visible: {scale: 1, rotate: 0}
}

const transition = {
  delay: 0.2,
}

const style = {
  height: 100,
  width: 100,
  backgroundColor: '#F36454',
  borderRadius: 15,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '4rem',
  color: 'white'
}

const ErrorIcon = () => (
  <motion.div
    style={style}
    initial="hidden"
    animate="visible"
    variants={variants}
    transition={transition}
  >
    !
  </motion.div>
)
export default ErrorIcon