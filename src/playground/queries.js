const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'expensify',
  password: 'postgres',
  port: 5432,
})

const getExpenses = (request, response) => {
  pool.query('SELECT * FROM expense ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createExpense = (request, response) => {
  const { description, note, amount, createAt } = request.body

  pool.query('INSERT INTO expense (id, description, note, amount, createAt) VALUES (DEFAULT, $1, $2, $3, $4)', [description, note, amount, createAt], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Expense added with ID: ${result.insertId}`)
  })
}

// const getUserById = (request, response) => {
//   const id = parseInt(request.params.id)

//   pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
//     if (error) {
//       throw error
//     }
//     response.status(200).json(results.rows)
//   })
// }

// const updateUser = (request, response) => {
//   const id = parseInt(request.params.id)
//   const { name, email } = request.body

//   pool.query(
//     'UPDATE users SET name = $1, email = $2 WHERE id = $3',
//     [name, email, id],
//     (error, results) => {
//       if (error) {
//         throw error
//       }
//       response.status(200).send(`User modified with ID: ${id}`)
//     }
//   )
// }

// const deleteUser = (request, response) => {
//   const id = parseInt(request.params.id)

//   pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
//     if (error) {
//       throw error
//     }
//     response.status(200).send(`User deleted with ID: ${id}`)
//   })
// }

module.exports = {
  getExpenses,
  createExpense
}