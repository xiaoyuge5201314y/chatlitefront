import { Navigate} from 'react-router-dom'

import Home from '../views/Home'
import Index from '../views/chat'
const routes = [
    {
        path: '/',
        element: <Navigate to="/home"></Navigate>
    },
    {
        path: '/home',
        element: <Home></Home>
    },
    {
        path: '/chat',
        element: <Index></Index>
    }

]

export default routes