import z from 'zod';

export const envSchema = z.object({
    SUPABASE_URL: z.string().url(),
    SUPABASE_ANON_KEY: z.string(),
    X_MAL_CLIENT_ID: z.string(),
});

export const envServer = envSchema.safeParse({
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY,
    X_MAL_CLIENT_ID: process.env.X_MAL_CLIENT_ID,
});

if (!envServer.success) {
    throw new Error('Missing enviroment variables or enviroment variables type is incorrect: ');
}

export const envServerSchema = envServer.data;