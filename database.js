import { Pool } from 'pg'

export const pool = new Pool({
    connectionString: process.env.d3cr3oc22n0qf9,
    ssl: {
        rejectUnauthorized: false
    },
    host: 'ec2-107-20-127-127.compute-1.amazonaws.com',
    user: 'saqpeswefqfroz',
    password: 'baa7478a630ce95bfabdc4fed8177127b61894cbd37af11fe14576dd5828a416',
    database: 'd3cr3oc22n0qf9',
    port: 5432,
    
});