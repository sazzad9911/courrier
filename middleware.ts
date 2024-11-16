import {
  NextMiddleware,
  NextResponse,
  NextRequest
} from "next/server";
import checkAuth from "./middleware/checkAuth";
import checkAdmin from "./middleware/checkAdmin";
import checkRider from "./middleware/checkRider";

export type MiddlewareFactory = (middleware: NextMiddleware) => NextMiddleware;

export function stackMiddlewares(functions: MiddlewareFactory[] = [], index = 0): NextMiddleware {
  
  const current = functions[index];
  if (current) {
      const next = stackMiddlewares(functions, index + 1);
      return current(next);
  }
  return () => NextResponse.next();
}
const middlewares = [checkAuth,checkAdmin,checkRider];
export default stackMiddlewares(middlewares);

export const config = {
  matcher: ['/apis/:path*']
}