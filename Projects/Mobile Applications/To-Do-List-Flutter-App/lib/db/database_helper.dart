import 'dart:io';
import 'package:path/path.dart';

import 'package:flutter/cupertino.dart';
import 'package:path_provider/path_provider.dart';
import 'package:sqflite/sqflite.dart';
import 'package:to_do_list/models/task.dart';

class DatabaseHelper {
  static final _dbName = "ToDoList.db";
  static final _dbVersion = 1;
  static final _tableName = 'ToDoListTable';
  static final columnId = 'Id';
  static final columnTitle = 'Title';
  static final columnIsChecked = 'IsChecked';

  DatabaseHelper._privateConstructor();
  static final DatabaseHelper instance = DatabaseHelper._privateConstructor();

  static Database? _database;

  Future<Database?> get database async {
    if (_database != null) return _database;

    _database = await initiateDatabase();
    return _database;
  }

  Future<Database> initiateDatabase() async {
    Directory directory = await getApplicationDocumentsDirectory();
    String path = join(directory.path, _dbName);
    return await openDatabase(path, version: _dbVersion, onCreate: _onCreate);
  }

  void _onCreate(Database db, int version) {
    db.execute('''
    CREATE TABLE $_tableName ($columnId INTEGER PRIMARY KEY ,$columnTitle TEXT NOT NULL,$columnIsChecked INT NOT NULL)
    ''');
  }

  Future<int?> insert(Task task) async {
    Database? db = await instance.database;
    Map<String, dynamic> map = {
      columnTitle: task.title,
      columnIsChecked: task.isChecked == true ? 1 : 0
    };
    return await db?.insert(_tableName, map);
  }

  Future<List<Map<String, dynamic>>?> queryAll() async {
    Database? db = await instance.database;
    return await db?.query(_tableName);
  }

  Future<int?> update(Task task) async {
    Database? db = await instance.database;
    Map<String, dynamic> map = {
      columnTitle: task.title,
      columnIsChecked: task.isChecked == true ? 1 : 0
    };
    return await db?.update(_tableName, map,
        where: '$columnTitle=?', whereArgs: [task.title]);
  }

  Future<int?> delete(Task task) async {
    Database? db = await instance.database;
    return await db
        ?.delete(_tableName, where: '$columnTitle=?', whereArgs: [task.title]);
  }
}
