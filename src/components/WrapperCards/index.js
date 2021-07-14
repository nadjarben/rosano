import React from 'react'
// import Grid from '@material-ui/core/Grid'
import { Wrapper } from './style'
import { categories } from '../../utils/categories'
import ModalProduct from '../ModalProduct'
import { useSelector,
  // useDispatch 
} from 'react-redux'



const WrapperCards = () => {
  const products = useSelector((state) => state.product.products)
  const adminMode = useSelector((state) => state.admin.adminMode)
  return (
    <Wrapper>
      {categories.map((c) => {
        return (
          <div className='card-container'>
            <h3 className='card-title'>{c}</h3>
            <div className='products'>
              {products
                .map((product) => {
                  return (
                    <React.Fragment key={product._id}>
                      {adminMode ? (
                        <div style={{ display: 'flex' }}>
                          <ModalProduct product={product} />
                        </div>
                      ) : (
                        product.available && (
                          <div style={{ display: 'flex' }}>
                            <ModalProduct product={product} />
                          </div>
                        )
                      )}
                    </React.Fragment>
                  )
                })}
            </div>
          </div>
        )
      })}
    </Wrapper>
  )
}

export default WrapperCards
