import React from 'react'
import { useTranslation } from 'react-i18next'
import {
  useSelector,
  // useDispatch 
} from 'react-redux'
// import { changeCategory } from '../../store/actions/app'
import ModalProduct from '../ModalProduct'
import { Wrapper } from './style'
import { SnapList, SnapItem } from 'react-snaplist-carousel';

const Slider = () => {
  const { t } = useTranslation()
  // const dispatch = useDispatch();

  const products = useSelector((state) => state.product.products)

  return (
    <Wrapper>

      <h1>{t('package')}</h1>
      <SnapList>
        {products
          .sort((a, b) => a.brand.localeCompare(b.brand))
          .filter((product) => product.category === 'package')
          .map((product) => {
            return (
              <React.Fragment key={product._id}>
                {product.available && (
                  <SnapItem margin={{ left: '15px', right: '15px' }} snapAlign="center">
                    <ModalProduct product={product} />
                  </SnapItem>
                )}
              </React.Fragment>
            )
          })}
      </SnapList>

      <h1>{t('beer')}</h1>
      <SnapList>
        {products
          .sort((a, b) => a.brand.localeCompare(b.brand))
          .filter((product) => product.category === 'beer')
          .map((product) => {
            return (
              <React.Fragment key={product._id}>
                {product.available && (
                  <SnapItem margin={{ left: '15px', right: '15px' }} snapAlign="center">
                    <ModalProduct product={product} />
                  </SnapItem>
                )}
              </React.Fragment>
            )
          })}
      </SnapList>

      <h1>{t('whiskey')}</h1>
      <SnapList>
        {products
          .sort((a, b) => a.brand.localeCompare(b.brand))
          .filter((product) => product.category === 'whiskey')
          .map((product) => {
            return (
              <React.Fragment key={product._id}>
                {product.available && (
                  <SnapItem margin={{ left: '15px', right: '15px' }} snapAlign="center">
                    <ModalProduct product={product} />
                  </SnapItem>
                )}
              </React.Fragment>
            )
          })}
      </SnapList>

      <h1>{t('vodka')}</h1>
      <SnapList>
        {products
          .sort((a, b) => a.brand.localeCompare(b.brand))
          .filter((product) => product.category === 'vodka')
          .map((product) => {
            return (
              <React.Fragment key={product._id}>
                {product.available && (
                  <SnapItem margin={{ left: '15px', right: '15px' }} snapAlign="center">
                    <ModalProduct product={product} />
                  </SnapItem>
                )}
              </React.Fragment>
            )
          })}
      </SnapList>

      <h1>{t('rhum')}</h1>
      <SnapList>
        {products
          .sort((a, b) => a.brand.localeCompare(b.brand))
          .filter((product) => product.category === 'rhum')
          .map((product) => {
            return (
              <React.Fragment key={product._id}>
                {product.available && (
                  <SnapItem margin={{ left: '15px', right: '15px' }} snapAlign="center">
                    <ModalProduct product={product} />
                  </SnapItem>
                )}
              </React.Fragment>
            )
          })}
      </SnapList>

      <h1>{t('arak')}</h1>
      <SnapList>
        {products
          .sort((a, b) => a.brand.localeCompare(b.brand))
          .filter((product) => product.category === 'arak')
          .map((product) => {
            return (
              <React.Fragment key={product._id}>
                {product.available && (
                  <SnapItem margin={{ left: '15px', right: '15px' }} snapAlign="center">
                    <ModalProduct product={product} />
                  </SnapItem>
                )}
              </React.Fragment>
            )
          })}
      </SnapList>

      <h1>{t('gin')}</h1>
      <SnapList>
        {products
          .sort((a, b) => a.brand.localeCompare(b.brand))
          .filter((product) => product.category === 'gin')
          .map((product) => {
            return (
              <React.Fragment key={product._id}>
                {product.available && (
                  <SnapItem margin={{ left: '15px', right: '15px' }} snapAlign="center">
                    <ModalProduct product={product} />
                  </SnapItem>
                )}
              </React.Fragment>
            )
          })}
      </SnapList>

      <h1>{t('vodka')}</h1>
      <SnapList>
        {products
          .sort((a, b) => a.brand.localeCompare(b.brand))
          .filter((product) => product.category === 'soft drink')
          .map((product) => {
            return (
              <React.Fragment key={product._id}>
                {product.available && (
                  <SnapItem margin={{ left: '15px', right: '15px' }} snapAlign="center">
                    <ModalProduct product={product} />
                  </SnapItem>
                )}
              </React.Fragment>
            )
          })}
      </SnapList>

      <h1>{t('snack')}</h1>
      <SnapList>
        {products
          .sort((a, b) => a.brand.localeCompare(b.brand))
          .filter((product) => product.category === 'snack')
          .map((product) => {
            return (
              <React.Fragment key={product._id}>
                {product.available && (
                  <SnapItem margin={{ left: '15px', right: '15px' }} snapAlign="center">
                    <ModalProduct product={product} />
                  </SnapItem>
                )}
              </React.Fragment>
            )
          })}
      </SnapList>

      <h1>{t('tobacco')}</h1>
      <SnapList>
        {products
          .sort((a, b) => a.brand.localeCompare(b.brand))
          .filter((product) => product.category === 'tabac')
          .map((product) => {
            return (
              <React.Fragment key={product._id}>
                {product.available && (
                  <SnapItem margin={{ left: '15px', right: '15px' }} snapAlign="center">
                    <ModalProduct product={product} />
                  </SnapItem>
                )}
              </React.Fragment>
            )
          })}
      </SnapList>
    </Wrapper>
  )
}

export default Slider
