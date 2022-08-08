import CartContainer from './components/CartContainer'
import Modal from './components/Modal'
import Navbar from './components/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { getCartItems } from './features/cart/cartSlice'
import { useEffect } from 'react'

const App = () => {
  const { isOpen } = useSelector((store) => store.modal)
  const { isLoading } = useSelector((store) => store.cart)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCartItems())
  }, [])

  if (isLoading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    )
  }

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  )
}
export default App
