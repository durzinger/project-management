import React from 'react'
import { Authenticator } from '@aws-amplify/ui-react'
import { Amplify } from 'aws-amplify'
import "@aws-amplify/ui-react/styles.css"

Amplify.configure({
    Auth: {
        Cognito: {
            userPoolId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID || "",
            userPoolClientId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_CLIENT_ID || "",
        }
    }
});

const formFields = {
    signUp: {
        username: {
            order: 1,
            placeholder: "Choose a username",
            label: "Username",
            isRequired: true
        },
        email: {
            order: 2,
            placeholder: "Enter your email address",
            label: "Email",
            isRequired: true
        },
        password: {
            order: 3,
            placeholder: "Enter your password",
            label: "Password",
            isRequired: true
        },
        confirm_password: {
            order: 4,
            placeholder: "Confirm your password",
            label: "Confirm Password",
            isRequired: true
        },
    }
}

const AuthProvider = ({ children}: any) => { // eslint-disable-line @typescript-eslint/no-explicit-any
    return (
        <div className="mt-5">
            <Authenticator formFields={formFields}>
                {({ user }: any) => // eslint-disable-line @typescript-eslint/no-explicit-any
                    user ? (
                        <div>{children}</div>
                    ) : (
                        <h1>Please sign in below:</h1>
                    )
                }
            </Authenticator>
        </div>
    )
}

export default AuthProvider