import { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import { BACKEND_URL, BASE_URL } from '../../../lib/constants';
import { JWT } from 'next-auth/jwt';
import { useRouter } from 'next/navigation';

async function refreshToken(token: JWT): Promise<JWT> {
  const res = await fetch(BACKEND_URL + '/auth/refresh', {
    method: 'POST',
    headers: {
      authorization: `Refresh ${token.backendTokens.refreshToken}`,
    },
  });
  const response = await res.json();

  return {
    user: response.user,
    backendTokens: response.backendTokens,
  };
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        document: {
          label: 'Document',
          type: 'text',
          placeholder: '123.456.789-10',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        if (!credentials?.document || !credentials.password) return null;
        const { document, password } = credentials;
        const res = await fetch(BACKEND_URL + '/auth/login', {
          method: 'POST',
          body: JSON.stringify({
            document,
            password,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (res.status == 401) {
          return null;
        }
        const user = await res.json();
        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) return { ...token, ...user };
      if (new Date().getTime() < token.backendTokens.expiresIn) return token;
      return await refreshToken(token);
    },

    async session({ token, session }) {
      session.user = token.user;
      session.backendTokens = token.backendTokens;

      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
