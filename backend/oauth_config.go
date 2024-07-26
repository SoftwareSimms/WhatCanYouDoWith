package main

import (
    "github.com/authlib/go"
)

// Initialize OAuth configuration
var oauth = OAuth()

func initOAuth() {
    oauth.Register(
        "google",
        OAuthConfig{
            ClientID:     "GOOGLE_CLIENT_ID",
            ClientSecret: "GOOGLE_CLIENT_SECRET",
            RedirectURI:  "http://localhost:3000/auth/callback",
            Scope:        "openid email profile",
        },
    )
    // Repeat for Microsoft and Apple with their respective configurations
}
