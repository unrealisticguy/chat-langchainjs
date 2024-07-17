const apiBasePath = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : `http://localhost:4000`;
export const apiBaseUrl = `${apiBasePath}/api`;
