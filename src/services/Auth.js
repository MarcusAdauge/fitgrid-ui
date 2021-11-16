export class Auth {
    static get isAuthenticated() {
        return sessionStorage.getItem('auth-token');
    }
}
