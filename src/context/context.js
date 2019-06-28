import React, { Component } from 'react'
import {linkData} from './linkData';
import {socialData} from './socialData';

const ProductContext = React.createContext();

export class ProductProvider extends Component {

    state = {
        sideBarOpen: false,
        cartOpen: false,
        cartItems: 0,
        links: linkData,
        socialIcons: socialData,
        cart: [],
        
        
    }

    handleSidebar = () => {
        this.setState({sideBarOpen: !this.state.sideBarOpen});
    }
    handleCart = () => {
        this.setState({cartOpen: !this.state.cartOpen});
    }
    closeCart = () => {
        this.setState({cartOpen: false});
    }
    openCart = () => {
        this.setState({cartOpen: true});
    }


    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state, 
                handleSidebar: this.handleSidebar,
                handleCart: this.handleCart,
                closeCart: this.closeCart,
                openCart: this.openCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

export const  ProductConsumer = ProductContext.Consumer;
