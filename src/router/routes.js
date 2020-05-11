import Login from '@/pages/Login';
import Home from '@/pages/Home';

let routes = [
	{path:'/',redirect:window.currentPath},
	{ path: '/home', component: Home },
	{ path: '/login', component: Login },
];

console.log(routes)







export default routes