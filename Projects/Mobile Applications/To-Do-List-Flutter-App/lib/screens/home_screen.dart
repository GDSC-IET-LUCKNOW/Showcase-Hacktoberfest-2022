import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:to_do_list/models/task_data.dart';
import 'package:to_do_list/widgets/task_tile.dart';

import 'add_task_screen.dart';

class HomeScreen extends StatefulWidget {
  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    print('Init State...............');
    Provider.of<TaskData>(context, listen: false).getTaskList();
  }

  @override
  Widget build(BuildContext context) {
    print('Remade HomeScreen.............');
    return Scaffold(
      floatingActionButton: FloatingActionButton(
        backgroundColor: Colors.orange,
        child: Icon(Icons.add),
        onPressed: () {
          showModalBottomSheet(
              context: context,
              builder: (_) {
                return AddTaskScreen();
              });
        },
      ),
      body: SafeArea(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Padding(
              padding: const EdgeInsets.only(top: 40, right: 20, left: 20),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    'To Do List',
                    style: TextStyle(
                        fontSize: 32,
                        fontWeight: FontWeight.w700,
                        color: Color(0xFF9537C1)),
                  ),
                  SizedBox(
                    height: 20,
                  ),
                  Text(
                    '${Provider.of<TaskData>(context).tasksLength} tasks',
                    style: TextStyle(
                        fontSize: 15,
                        fontWeight: FontWeight.w700,
                        color: Color(0xFF9537C1)),
                  ),
                  SizedBox(height: 40),
                ],
              ),
            ),
            Expanded(
              child: Container(
                width: double.infinity,
                decoration: BoxDecoration(
                    color: Color(0xFF8A3DAE),
                    borderRadius: BorderRadius.only(
                        topLeft: Radius.circular(32),
                        topRight: Radius.circular(32))),
                child: Padding(
                  padding:
                      EdgeInsets.only(top: 55, left: 35, right: 35, bottom: 55),
                  child:
                      Consumer<TaskData>(builder: (context, taskData, child) {
                    return ListView.builder(
                        itemCount: taskData.tasksLength,
                        itemBuilder: (_, index) {
                          return TaskTile(taskData.taskList[index]);
                        });
                  }),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
