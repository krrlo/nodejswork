module.exports = {
  userList: `SELECT *FROM  t_user`,
  userInsert: `INSERT INTO t_user SET ?`,
  userUpdate: `UPDATE t_user SET ?  WHERE user_no = ?`,
  userDelete: `DELETE FROM t_user WHERE user_no =?`,
  userInfo: `SELECT *FROM t_user  WHERE user_no = ?`,
};
