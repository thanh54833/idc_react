import { UserManager, WebStorageStateStore, User } from 'oidc-client';

export default class Auth_service {
    private userManager: UserManager;

    constructor() {
        const settings = {
            authority: 'https://ids.concung.com/identity',
            client_id: 'your-client-id',
            redirect_uri: `${window.location.origin}/callback`,
            response_type: 'code',
            scope: 'openid profile api1',
            post_logout_redirect_uri: `${window.location.origin}/`,
            userStore: new WebStorageStateStore({ store: window.localStorage }),
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
