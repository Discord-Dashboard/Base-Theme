// pages/api/auth/[...nextauth].js
import { authOptions } from '../../../../utils/AuthOptions';
import NextAuth from 'next-auth';

const handler = (req, res) => NextAuth(req, res, authOptions);

export { handler as GET, handler as POST };
