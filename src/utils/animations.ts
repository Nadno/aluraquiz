import { motion } from 'framer-motion';

const showAnimation = {
  as: motion.section,
  variants:{
    show: { opacity: 1, y: '0' },
    hidden: { opacity: 0, y: '32px' },
  },
  initial: "hidden",
  animate: "show",
}

export const setShowAnimation = (transition: { delay: number; duration: number; }) => ({
  ...showAnimation,
  transition,
})

export const LinkAnimation = {
  as: motion.section,
  transition: { delay: 0.2, duration: 0.1 },
  variants:{
    show: { opacity: 1, x: '0' },
    hidden: { opacity: 0, x: '-12px' },
  },
  initial: "hidden",
  animate: "show",
}