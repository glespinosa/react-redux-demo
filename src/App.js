import './App.css'
import CakeContainer from './components/CakeContainer'
import { Provider } from 'react-redux'
import store from './redux/store'
import HooksCakeContainer from './components/HooksCakeContainer'
import HooksIceCreamContainer from './components/HooksIceCreamContainer'
import NewCakeContainer from './components/NewCakeContainer'
import ItemContainer from './components/ItemContainer'
import UserContainer from './components/UserContainer'

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <UserContainer />
        <ItemContainer cake />
        <ItemContainer />
        <CakeContainer />
        <HooksCakeContainer />
        <hr />

        <HooksIceCreamContainer />
        <hr />

        <NewCakeContainer />
      </div>
    </Provider>
  )
}

export default App
