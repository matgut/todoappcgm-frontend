//comprueba el almacenamiento local en busca de un elemento de usuario. Si hay un usuario conectado con accessToken (JWT), 
//devuelve la cabecera HTTP Authorization. En caso contrario, devuelve un objeto vacío.
export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.accessToken) {
      return { Authorization: 'Bearer ' + user.accessToken };
    } else {
      return {};
    }
  }