import { Fragment, useContext } from "react";
import { Outlet} from "react-router-dom";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdowm from "../../components/cart-dropdown/cart-dropdown.component";

import { CartContext } from "../../contexts/cart.context";

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import { UserContext } from "../../contexts/user.context";
import {NavigationContainer, NavLinks, NavLink, LogoContainer} from './navigation.style';

const Navigation = ()=>{
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
    return (
      <Fragment>
        <NavigationContainer>
          <LogoContainer to="/">
            <CrwnLogo className="logo"/>
          </LogoContainer>
          <NavLinks>
            <NavLink to="/shop">
                SHOP
            </NavLink>
            {
              currentUser ?( 
                <NavLink as='span' className="nav-link" onClick={signOutUser}>SIGN OUT</NavLink>)
                : (
                  <NavLink to="/auth">
                    SIGN IN
                  </NavLink>                  
                )
            }
            <CartIcon/>

          </NavLinks>
          {isCartOpen && <CartDropdowm />}
        </NavigationContainer>
        <Outlet/>
      </Fragment>
    )
  }

export default Navigation;