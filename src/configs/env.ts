
import { z } from 'zod'
import { config } from 'dotenv'

config({ path: '.env.local' })

const envSchema = z.object({
    PORT: z.coerce.number(),
    DB_HOST: z.string(),
    DB_USER: z.string(),
    DB_PASS: z.string().transform(val => val === 'null' ? undefined : val),
    DB_NAME: z.string(),
    JWT_SECRET: z.string(),
})

const result = envSchema.safeParse(process.env)

if (!result.success) {
    console.error('Invalid environment variables', result.error.format())
    process.exit(1)

}

const env = result.data

export default env