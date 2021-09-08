import axios from "axios"

const postRegister = async (body) => {
  const url = "https://api.jungledevs.com/api/v1/challenge-newsletter/"
  let answer = ''
  await axios.post(url, body)
  .then(response => {
    answer = response
  })
  .catch(error => {
    answer = error
  })
  return answer
}

export default postRegister;
