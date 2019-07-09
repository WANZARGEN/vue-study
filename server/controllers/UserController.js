/**--------------------------------------------------------------------------*
 * 
 *
 * @module UserController
 *
 * @description :: User controller
 * 
 * @author wanzargen
 * 
 * @since 2018-08-02
 * 
 * 
 *----------------------------------------------------------------------------*/

 

/**---------------------------------------------------------------------------*
 *                                    INCLUDE                                 *
 *----------------------------------------------------------------------------*/

require('dotenv').config()

const errorHandler  = require('../lib/errorHandler')



/**---------------------------------------------------------------------------*
 *                                    PRIVATE                                 *
 *----------------------------------------------------------------------------*/

const userData = require('../data/users.json')
const userTreeData = require('../data/users_tree.json')



/**---------------------------------------------------------------------------*
 *                                    EXPORTS                                 *
 *----------------------------------------------------------------------------*/

module.exports = {

  /**
   * UserController.list()
   */
  list: function (req, res) {

    let users = userData

    if (!users) return errorHandler(res, `NO_DATA`, 500, `Error when getting users`);

    return res.json(users);

  },

  /**
   * UserController.listTree()
   */
  listTree: function (req, res) {

    let users = userTreeData

    if (!users) return errorHandler(res, `NO_DATA`, 500, `Error when getting users`);

    return res.json(users);

  }

};
