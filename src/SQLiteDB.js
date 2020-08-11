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
}


