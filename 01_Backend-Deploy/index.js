require('dotenv').config()
const express = require('express')
const app = express()

const port = 4000

const gitData = {
  "login": "papu-hacker",
  "id": 173533120,
  "node_id": "U_kgDOClfnwA",
  "avatar_url": "https://avatars.githubusercontent.com/u/173533120?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/papu-hacker",
  "html_url": "https://github.com/papu-hacker",
  "followers_url": "https://api.github.com/users/papu-hacker/followers",
  "following_url": "https://api.github.com/users/papu-hacker/following{/other_user}",
  "gists_url": "https://api.github.com/users/papu-hacker/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/papu-hacker/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/papu-hacker/subscriptions",
  "organizations_url": "https://api.github.com/users/papu-hacker/orgs",
  "repos_url": "https://api.github.com/users/papu-hacker/repos",
  "events_url": "https://api.github.com/users/papu-hacker/events{/privacy}",
  "received_events_url": "https://api.github.com/users/papu-hacker/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Papu-Hacke₹",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 5,
  "public_gists": 0,
  "followers": 2,
  "following": 1,
  "created_at": "2024-06-22T06:58:16Z",
  "updated_at": "2026-04-29T07:33:35Z"
}


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/test', (req, res) => {
  res.send("hehe from test")
})

app.get('/login', (req, res) => {
  res.send("<h1>login page is under const</h1>")
})

app.get('/git', (req, res) => {
  res.json({gitData})
})

app.listen(process.env.PORT, () => {
  console.log(`app listening on url http://localhost:${process.env.PORT}`)
})
