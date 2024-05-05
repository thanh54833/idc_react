
import {User, UserManager, WebStorageStateStore} from 'oidc-client';

export default class Auth_service {
    private userManager: UserManager;

    constructor() {
        const settings = {
            authority: 'http://localhost:3000', // updated from JSON
            client_id: 'mobile', // updated from JSON
            redirect_uri: 'http://localhost:3000/ids', // updated from JSON
            response_type: 'code',
            scope: 'openid', // updated from JSON
            post_logout_redirect_uri: `${window.location.origin}/`,
            userStore: new WebStorageStateStore({store: window.localStorage}),
        };
        this.userManager = new UserManager(settings);
    }

    public getUser(): Promise<User | null> {
        return this.userManager.getUser();
    }

    public login(): Promise<void> {
        return this.userManager.signinRedirect();
    }

    public async logout(): Promise<void> {
        await this.userManager.signoutRedirect();
    }

    public async completeLogin(): Promise<User> {
        return this.userManager.signinRedirectCallback();
    }

    public async completeLogout(): Promise<void> {
        await this.userManager.signoutRedirectCallback();
    }
}
