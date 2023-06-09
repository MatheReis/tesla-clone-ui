import React, { useCallback, useLayoutEffect, useState } from 'react'
import { motion, useTransform, useSpring } from 'framer-motion';

import useWrapperScroll from '../useWrapperScroll'

import { CarModel } from '../ModelContext'
import { Container } from './styles'

interface Props {
  model: CarModel
}

type SectionDimensions = Pick<HTMLDivElement, 'offsetTop' | 'offsetHeight'>

const ModelOverlay: React.FC<React.HTMLAttributes<HTMLDivElement> & Props> = ({ model, children }) => {
  const { scrollY } = useWrapperScroll()

  const getSectionDimensions = useCallback(() => {
    return {
      offsetTop: model.sectionRef.current?.offsetTop ?? 0,
      offsetHeight: model.sectionRef.current?.offsetHeight ?? 0
    } as SectionDimensions
  }, [model.sectionRef])

  const [dimensions, setDimensions] = useState<SectionDimensions>(
    getSectionDimensions()
  )

  useLayoutEffect(() => {
    function onResize() {
      window.requestAnimationFrame(() => setDimensions(getSectionDimensions()))
    }

    window.addEventListener('resize', onResize)

    return () => window.removeEventListener('resize', onResize)
  }, [getSectionDimensions, model.sectionRef])

  const sectionScrollProgress = useTransform(
    scrollY,
    y => (y - dimensions.offsetTop) / dimensions.offsetHeight
  );
  const opacity = useTransform(
    sectionScrollProgress,
    [-0.42, -0.05, 0.05, 0.42],
    [0, 1, 1, 0]
  );

  const pointerEvents = useTransform(opacity, value =>
    value > 0 ? 'auto' : 'none'
  );

  return (
    <motion.div style={{ opacity, pointerEvents }}>
      <Container>{children}</Container>
    </motion.div>

  );

}

export default ModelOverlay
