import { postgresAdapter } from '@payloadcms/db-postgres';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import path from 'path';
import { buildConfig } from 'payload/config';
import { fileURLToPath } from 'url';

import { Users } from './collections/Users';
import { sendGridEmailAdapter } from './lib/sendgrid';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
    admin: {
        user: Users.slug,
    },
    collections: [Users],
    editor: lexicalEditor({}),
    secret: process.env.PAYLOAD_SECRET || '',
    typescript: {
        outputFile: path.resolve(dirname, 'assets/typescript/payload-types.ts'),
    },
    db: postgresAdapter({
        pool: {
            connectionString: process.env.DATABASE_URI || '',
        },
    }),
    email:
        process.env.NODE_ENV === 'development'
            ? undefined
            : sendGridEmailAdapter,
});
