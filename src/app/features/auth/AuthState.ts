import { User } from "@auth0/auth0-react";

interface AuthState {
    isAuthenticated: boolean
    user?: User
}

export default AuthState;