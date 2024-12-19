/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_APP_API_URL: 'https://shopifyapi.plantifygarden.in',
    // NEXT_APP_API_URL: "http://192.168.1.71:3111",
    SHOPIFY_URL: "https://plantifygarden.com",

    SHOPIFY_GENERATE_TOKEN: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzaG9waWZ5YWNjZXNzdG9rZW4iOiJzaHBhdF82ZTYyNWI4MTJhZDU3Zjk3ZjQzYzhiNjFkYmUzZTI1NiIsInNob3BpZnl1cmwiOiJodHRwczovLzk4NDMwMy1mMi5teXNob3BpZnkuY29tIiwiaWF0IjoxNzI1MjU0NzU0fQ.GDnp0CyFaLYSUo7zy4fVajeI15KfeqbocanITif-qM1B2lvT3wM2YEryaf0hVOBoV395gMjOYg12hY21refmPHhjdJU3uHM7miWpCdqfEfj98PIXATYr4gf41csnZ1wMUU-Urrf4-Yu3yPgF5TnhcGzzfSDcwfE87f9XUjKgsNpnsj5sd6MV2FluHHCoWy30MDJ0yZPaVnikQiHp96x2bPB2E37ZahPDKZZ4zEik6LVkHzPAFdanDrxuyc4vqKEqPu7zGEOxEtyxsMEayHqHQnbEaENYv5CG9TwQW0DDyDWqu8amQnpP32HU8You5tm8YUanQUYqCC7-RLkEtxnnpQ"

  },

  images: {
    unoptimized: true,
    minimumCacheTTL: 60,
  },
  trailingSlash: true,
  reactStrictMode: true,
  output: 'export',
};

export default nextConfig;
