import {motion} from 'framer-motion'

const variants = {
  hidden: {x: 100, opacity: 0},
  visible: {x: 0, opacity: 1}
}

const transition = { delay: 0.1 }

const imgStyle = {height: 200}

const ScreenImage = ({image}) => (
  <div className="center">
    <motion.img
      style={imgStyle}
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={transition}
      src={image}
    />
  </div>
)
export default ScreenImage