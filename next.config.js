module.exports = {
  async redirects() {
    return [
      {
        source: '/hello-vercel',
        destination: '/vercel.com',
        permanent: false,
      },
    ]
  },
}
