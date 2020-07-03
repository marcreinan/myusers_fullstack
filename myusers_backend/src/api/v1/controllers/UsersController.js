const connection = require('../database/connection');

module.exports = {
  async index(req, res) {
    const { id = '', page = 1, size = 2 } = req.query;
    let users;
    if (id !== '') {
      users = await connection('users').where('id', id).select('*');
    } else {
      const [count] = await connection('users').count()

      const users = await connection('users')
        .select('*')
        .limit(size)
        .offset((page - 1) * size);

      if (!users) {
        return res.status(404).json({
          error: 'User(s) not found.'
        });
      }
      return res.status(200).json({data: users, "x-length": count['count(*)']});
    }
  },

  createMany(req, res) {
    users = req.body

    users.forEach(async (user) => {
      try {
        const userCheck = await connection('users').select('*').where('email', user.email);
        if (userCheck.length == 0) {
          await connection('users').insert({
            id: user.id,
            email: user.email,
            first_name: user.first_name,
            last_name: user.last_name,
            avatar: user.avatar
          })
        } else {
          await connection('users').update({
            first_name: user.first_name,
            last_name: user.last_name,
            avatar: user.avatar
          }).where('email', user.email)
        }
      } catch (err) {
        console.log(err)
        return res.status(400).send()
      }

    })
    return res.status(201).send();
  }
}