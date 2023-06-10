export default function getBaseUrl() {
  return (
    process.env.BASE_URL || process.env.VERCEL_URL || 'http://localhost:3000'
  );
}
