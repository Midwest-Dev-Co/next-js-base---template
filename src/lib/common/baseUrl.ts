// * Get the base URL for the current environment
function getBaseUrl() {
  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:3000';
  } else {
    return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
  }
}

// Export the base URL
export default getBaseUrl();
