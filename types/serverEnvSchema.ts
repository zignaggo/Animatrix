import z from 'zod';

export const envSchema = z.object({
    NEXT_PUBLIC_SUPABASE_URL: z.string().url(),
    NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string(),
    AUTH_GOOGLE_ID: z.string(),
    AUTH_GOOGLE_SECRET: z.string(),
    X_MAL_CLIENT_ID: z.string(),
    PRODUCTION: z.string(),
});

export const envServer = envSchema.safeParse({
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    AUTH_GOOGLE_ID: process.env.AUTH_GOOGLE_ID,
    AUTH_GOOGLE_SECRET: process.env.AUTH_GOOGLE_SECRET,
    X_MAL_CLIENT_ID: process.env.X_MAL_CLIENT_ID,
    PRODUCTION: process.env.PRODUCTION,
});

if (!envServer.success) {
    throw new Error('Missing enviroment variables or enviroment variables type is incorrect: ');
}

export const envServerSchema = envServer.data;