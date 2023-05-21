import { useEffect } from 'react';
import { ProductCard } from './components/ProductCard';
import { ServerError, Spinner } from '@/shared/';
import { useCart, useCartPanel } from '@/services/cart';
import { useProductsService } from '@/services/products';


export function ShopPage() {
    const openCartPanel = useCartPanel(state => state.openOverlay)
    const addToCart = useCart(state => state.addToCart)

    const { actions, state } = useProductsService()

    useEffect(()=> {
        actions.getProducts()
    }, [])

    return (
        <div>
            <h1 className="title">Shop</h1>

            {state.error && <ServerError />}
            {state.pending && <Spinner />}
            
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-16'>
            {
                state.products.map(p => {
                    return (
                        <div key={p.id}>
                            <ProductCard 
                              product={p} 
                              onAddToCart={() => {
                                addToCart(p)
                                openCartPanel()
                              }}
                            />
                        </div>
                    )
                })
            }
            </div>
            
        </div>
    )
}