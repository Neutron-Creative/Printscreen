import Cookies from "~/middleware/utils";

export default function ({store, redirect}) {
  const capture_token = Cookies.getCookieValue('capture_token');
  if (capture_token || store.getters.get_token) {
    return redirect(200, '/dashboard');
  }
}
