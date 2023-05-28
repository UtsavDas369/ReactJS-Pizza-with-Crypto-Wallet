import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Utsav Das',
    email: 'utsav@gmail.com',
    password: bcrypt.hashSync('123', 10),
    isAdmin: true,
  },
  {
    name: 'Bob',
    email: 'bob@gmail.com',
    password: bcrypt.hashSync('123', 10),
  },
  {
    name: 'Alice',
    email: 'alice@gmail.com',
    password: bcrypt.hashSync('123', 10),
  },
]

export default users
