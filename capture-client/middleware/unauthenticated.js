import Utils from "~/middleware/utils";

export default checkAuthenticated;

function checkAuthenticated({store, redirect}) {
  const capture_token = Utils.getCookie('capture_token');
  if (capture_token || store.getters.get_token) {
    return redirect(200, '/dashboard');
  }
}
