import React from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector,
  // useDispatch 
} from 'react-redux'
// import { changeCategory } from '../../store/actions/app'
import Backdrop from '@material-ui/core/Backdrop'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import ModalProduct from '../ModalProduct'
import LogoSpinner from '../LogoSpinner'
import ModalCreateProduct from '../ModalCreateProduct'
import SearchBar from '../SearchBar'
import { Wrapper } from './style'
import Slider from "react-slick";

import beer from '../../assets/caroussel/beer.jpg'
import whiskey from '../../assets/caroussel/whiskey.jpg'
import vodka from '../../assets/caroussel/vodka.webp'

const Products = () => {
  const { t } = useTranslation()
  // const dispatch = useDispatch();

  const products = useSelector((state) => state.product.products)
  const category = useSelector((state) => state.app.category)
  const isLoading = useSelector((state) => state.product.isLoading)
  const adminMode = useSelector((state) => state.admin.adminMode)
  const searchBar = useSelector((state) => state.app.searchBar)

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  // const handleCategory = (toto) => {
  //   dispatch(changeCategory(toto))
  // }

  const settings = {
    autoplay: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    vertical: true,
  };

  return (
    <Wrapper>
      toto
    </Wrapper>
  )
}

export default Products
