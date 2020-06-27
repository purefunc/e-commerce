import React from "react"
import styled from "styled-components"
import { useCheckout } from "../../../global"
import Icon from "../Icon"

const CartIcon = () => {
  const { openCart, cartQuantity } = useCheckout()
  return (
    <IconWrapper onClick={openCart}>
      <Icon name="cart" style={{ height: "24px", width: "24px" }} />
      {cartQuantity > 0 && (
        <IconTag>
          <span>{cartQuantity}</span>
        </IconTag>
      )}
    </IconWrapper>
  )
}

export default CartIcon

const IconWrapper = styled.div`
  display: flex;
  &:hover {
    cursor: pointer;
  }
  margin-left: 1rem;
`

const IconTag = styled.span`
  background: var(--primaryColor);
  border-radius: 50%;
  color: var(--white);
  display: inline-block;
  height: 2rem;
  width: 2rem;
  font-size: 1rem;
  text-align: center;
  vertical-align: middle;
  margin-left: -1rem;
  margin-top: -10px;

  span {
    font-size: 1.4rem;
  }
`
