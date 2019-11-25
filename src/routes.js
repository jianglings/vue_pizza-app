import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import About from './components/about/About'
import Login from './components/Login'
import Register from './components/Register'


// 二级路由
import Contact from './components/about/Contact'
import Delivery from './components/about/Delivery'
import History from './components/about/History'
import OrderingGuide from './components/about/OrderingGuide'

// 三级路由
import PersonName from './components/about/contact/PersonName'
import PhoneNumber from './components/about/contact/PhoneNumber'

export const routes = [
    {
        path: '/', name: 'homeLink', components: {
            default: Home,
            'history': History,
            'delivery': Delivery,
            'orderingGuide': OrderingGuide
        }
    },
    { path: '/menu', name: 'menuLink', component: Menu },
    { path: '/admin', name: 'adminLink', component: Admin },
    {
        path: '/about', name: 'aboutLink', redirect: '/about/contact', component: About, children: [
            {
                path: '/about/contact', name: 'contactLink', redirect: '/about/contact/phoneNumber', component: Contact, children: [
                    { path: '/about/contact/personName', name: 'personNameLink', component: PersonName },
                    { path: '/about/contact/phoneNumber', name: 'phoneNumberLink', component: PhoneNumber },

                ]
            },
            { path: '/about/delivery', name: 'deliveryLink', component: Delivery },
            { path: '/about/history', name: 'historyLink', component: History },
            { path: '/about/orderingGuide', name: 'orderingGuideLink', component: OrderingGuide },

        ]
    },
    { path: '/login', name: 'loginLink', component: Login },
    { path: '/register', name: 'registerLink', component: Register },
    { path: '*', redirect: '/' }
]
