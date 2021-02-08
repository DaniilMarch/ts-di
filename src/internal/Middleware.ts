import HttpContext from './HttpContext';
import Service from './Service';

type Middleware = (context: HttpContext, ...services: Service[]) => any;

export default Middleware;