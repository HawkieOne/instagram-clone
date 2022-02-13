export interface GoogleSession {
    user?: {
      name?: string | null
      email?: string | null
      image?: string | null
      username?: string | null
      uid?: string | null      // Here
    }
    expires?: string
  }