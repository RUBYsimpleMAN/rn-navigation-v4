import * as SQLite from 'expo-sqlite'

const PostDB = SQLite.openDatabase('post.db')

export class ClassDB {
  static init() {
    return new Promise((resolve, reject) => {
      PostDB.transaction(tx => {
        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS postsTable (id INTEGER PRIMARY KEY NOT NULL, text TEXT NOT NULL, img TEXT, date TEXT, booked INT )',
          [],
          resolve,
          (_, error) => reject(error)
        )
      })
    })
  }
  static getPosts() {
    return new Promise((resolve, reject) => {
      PostDB.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM postsTable',
          [],
          (_, result) => resolve(result.rows._array),
          (_, error) => reject(error)
        )
      })
    })
  }
  static createPost({ text, date, booked, img }) {
    return new Promise((resolve, reject) => {
      PostDB.transaction(tx => {
        tx.executeSql(
          `INSERT INTO postsTable (text, date, booked, img) VALUES (?, ?, ?, ?)`,
          [text, date, 0, img],
          (_, result) => resolve(result.insertId),
          (_, error) => reject(error)
        )
      })
    })
  }
  static updatePost(post) {
    return new Promise((resolve, reject) => {
      PostDB.transaction(tx => {
        tx.executeSql(
          'UPDATE postsTable SET booked = ? WHERE id = ?',
          [post.booked ? 0 : 1, post.id],
          resolve,
          (_, error) => reject(error)
        )
      })
    })
  }
  static deletePost(id) {
    return new Promise((resolve, reject) => {
      PostDB.transaction(tx => {
        tx.executeSql(
          'DELETE FROM postsTable WHERE id = ?',
          [id],
          resolve,
          (_, error) => reject(error)
        )
      })
    })
  }
}


