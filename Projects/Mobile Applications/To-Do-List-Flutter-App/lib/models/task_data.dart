import 'package:flutter/cupertino.dart';
import 'package:to_do_list/db/database_helper.dart';
import 'package:to_do_list/models/task.dart';

class TaskData with ChangeNotifier {
  List<Task> _taskList = [
    //Task(title: 'Long Press to delete'),
  ];

  void getTaskList() async {
    List<Map<String, dynamic>>? elements =
        await DatabaseHelper.instance.queryAll();
    List<Task> tempList = [];
    for (Map<String, dynamic> element in elements!) {
      Task task = Task(
          title: element[DatabaseHelper.columnTitle],
          isChecked:
              element[DatabaseHelper.columnIsChecked] == 0 ? false : true);
      tempList.add(task);
    }
    _taskList = tempList;
    notifyListeners();
  }

  List<Task> get taskList {
    return [..._taskList];
  }

  int get tasksLength {
    return _taskList.length;
  }

  void deleteTask(Task task) {
    DatabaseHelper.instance.delete(task);
    _taskList.removeWhere((t) => t.title == task.title);
    notifyListeners();
  }

  void addTask(taskTitle) {
    if (taskTitle != null) {
      Task task = Task(title: taskTitle);
      DatabaseHelper.instance.insert(task);
      _taskList.add(task);
      notifyListeners();
    }
  }

  void toggleCheckTask(Task task) {
    DatabaseHelper.instance.update(task);
    task.toggleCheck();
    notifyListeners();
  }
}
