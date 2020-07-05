import React, { ReactNode } from "react"
import { motion, AnimatePresence } from "framer-motion"
import styled from "styled-components"
import Portal from "./Portal"
import { Card } from "../styles"
import { useScrollFreeze } from "../hooks"
import Icon from "./Icon"

interface ModalAnimationProps {
  isActive: boolean
  maxWidth?: string
  children: ReactNode
  closeAction?: () => void
}

const ModalAnimation = ({
  isActive,
  children,
  maxWidth = `530px`,
  closeAction,
}: ModalAnimationProps) => {
  return (
    <Portal>
      <AnimatePresence>
        {isActive && (
          <Modal
            children={children}
            maxWidth={maxWidth}
            closeAction={closeAction}
            isActive={isActive}
          />
        )}
      </AnimatePresence>
    </Portal>
  )
}

const Modal = ({
  isActive,
  children,
  maxWidth,
  closeAction,
}: ModalAnimationProps) => {
  useScrollFreeze()
  const pointerEvents = isActive ? `all` : `none`
  return (
    <>
      <ModalWrapper>
        <Transport
          maxWidth={maxWidth}
          exit={{ opacity: 0, y: -40 }}
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          css="position: relative;"
        >
          {closeAction && (
            <CloseButton onClick={closeAction}>
              <Icon name="close" color="var(--white)" />
            </CloseButton>
          )}
          <Card style={{ pointerEvents }}>{children}</Card>
        </Transport>
      </ModalWrapper>
      <Background
        as={motion.div}
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={closeAction || null}
      />
    </>
  )
}

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  overflow-y: scroll;
  padding: 10%;
  pointer-events: none;
  z-index: var(--highestLevel);
`

const CloseButton = styled.button`
  position: absolute;
  background: transparent;
  border: none;
  right: 0;
  top: -30px;
  pointer-events: all;
  z-index: 1;
  cursor: pointer;
`

const Background = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  pointer-events: all;
  width: 100vw;
  height: 100vh;
  z-index: 99;
`

const Transport = styled(motion.div)`
  width: 100%;
  margin-top: auto;
  margin-bottom: auto;
  min-width: 320px;
  max-width: ${({ maxWidth }: { maxWidth: string }) => maxWidth};
`

export default ModalAnimation
