import z from 'zod';

export const envSchema = z.object({
    NEXT_PUBLIC_SUPABASE_URL: z.string().url(),
    NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string(),
    X_MAL_CLIENT_ID: z.string(),
});

export const envServer = envSchema.safeParse({
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    X_MAL_CLIENT_ID: process.env.X_MAL_CLIENT_ID,
});

if (!envServer.success) {
    throw new Error('Missing enviroment variables or enviroment variables type is incorrect: ');
}

export const envServerSchema = envServer.data;