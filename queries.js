const Pool = require('pg').Pool
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'api',
  password: 'mypassword',
  port: 5432,
})
const getUsers = (request, response) => {
  pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getUserById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }

    if (results.rowCount === 0) {
      response.status(404).send('User not found')
    } else {
      response.status(200).json(results.rows)
    }
  })
}


const createUser = (request, response) => {
    const { login,password,age } = request.body
  
    pool.query('INSERT INTO users (login, password, age) VALUES ($1, $2,$3)', [login, password, age], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`User added with ID: ${results.insertId}`)
    })
  }
  

const updateUser = (request, response) => {
  const id = parseInt(request.params.id)
  const { login, password, age } = request.body

  pool.query(
    'UPDATE users SET login = $1, password = $2, age=$3 WHERE id = $4',

    [login, password,age, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User modified with ID: ${id}`)
    }
  )
}

const deleteUser = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`User deleted with ID: ${id}`)
  })
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
}