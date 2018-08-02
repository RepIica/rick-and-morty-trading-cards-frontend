
const urlBase = `http://localhost:3001/api/v1`

const makeRickAndMortyRequest = () => {
  return fetch(`${urlBase}/characters`).then(resp => resp.json())
}

const getRandCard = () => {
  const randNum = Math.floor(Math.random() * 493) + 1;
  return fetch(`${urlBase}/decks/${randNum}`)
    .then(r => r.json())
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
  return fetch(`http://localhost:3001/api/v1/auth`, {
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

const getUsers = () => {
  return fetch(`${urlBase}/users`)
    .then(r => r.json())
}

const createFriendRequest = (requested_user_id, requester_user_id, token) => {
  const body = {
    friend_request: {
      requested_user_id: requested_user_id,
      requester_user_id: requester_user_id
    }
  }

  return fetch(`${urlBase}/friend_requests`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accepts: 'application/json',
      Authorization: token
    },
      body: JSON.stringify(body)
  })
    .then(res => res.json())
}



export {
  makeRickAndMortyRequest,
  createUser,
  loginUser,
  getCurrentUser,
  getUsers,
  getRandCard
  // makeUserTeamRequest,
  // setUserTeam
}
