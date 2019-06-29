import React from 'react'
import {ProductConsumer} from '../../context/context';
import Title from '../Title';
import Product from '../Product';

const Products = () => {
    return (
        <ProductConsumer>
            {(value) => {
                const {filteredProducts} = value;
                return (
                    <section className="py-5">
                        <div className="container">
                            <Title center title="our products"/>
                            <div className="row py-5">
                                {filteredProducts.map(product => {
                                    return (
                                        <Product key={product.id} product={product} />
                                    )
                                })}
                            </div>
                        </div>
                    </section>
                )
            }}
            
        </ProductConsumer>
    )
}

export default Products
