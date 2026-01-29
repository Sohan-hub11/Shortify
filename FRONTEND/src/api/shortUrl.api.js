import axi

export const createShortUrl = async (url) => {
  return await axios.post("http://localhost:3000/api/create", { url })
}
