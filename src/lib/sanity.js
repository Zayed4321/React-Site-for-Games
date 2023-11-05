import {createClient} from '@sanity/client'
// Import using ESM URL imports in environments that supports it:
// import {createClient} from 'https://esm.sh/@sanity/client'

export const client = createClient({
  projectId: import.meta.env.VITE_Project_ID,
  dataset: import.meta.env.VITE_DataSet_Name,
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2023-11-01', // use current date (YYYY-MM-DD) to target the latest API version
  token: import.meta.env.VITE_Token_ID // Only if you want to update content with the client
})

