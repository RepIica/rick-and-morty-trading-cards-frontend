
const urlBase = `https://rickandmortyapi.com/api/`

const makeRickAndMortyRequest = () => {
  return fetch(`${urlBase}/characters`).then(resp => resp.json())
}

const createUser = (username, password) => {
  return fetch(`${urlBase}/users`, {
    headers: {
      'Content-Type': 'application/json',
      Accepts: 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({
      username: username,
      password: password
    })
  }).then(res => res.json())
}

const loginUser = (username, password) => {
  return fetch(`${urlBase}auth`, {
    headers: {
      'Content-Type': 'application/json',
      Accepts: 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      username: username,
      password: password
    })
  }).then(res => res.json())
}

const getCurrentUser = (token) => {
  return fetch(`${urlBase}/current_user`, {
    headers: {
      'Content-Type': 'application/json',
      Accepts: 'application/json',
      Authorization: token
    }
  }).then(res => res.json())
}

// const makeUserTeamRequest = (id, token) => {
//   return fetch(`${urlBase}/users/${id}/friends`, {
//     headers: {
//       'Content-Type': 'application/json',
//       Accepts: 'application/json',
//       Authorization: token
//     }
//   }).then(res => res.json())
// }
//
// const setUserTeam = (id, token, pokemon) => {
//   return fetch(`${urlBase}/users/${id}/pokemon`, {
//     headers: {
//       'Content-Type': 'application/json',
//       Accepts: 'application/json',
//       Authorization: token
//     },
//     method: 'POST',
//     body: JSON.stringify({ pokemon })
//   }).then(res => res.json())
// }


export {
  makeRickAndMortyRequest,
  createUser,
  loginUser,
  getCurrentUser,
  // makeUserTeamRequest,
  // setUserTeam
}
