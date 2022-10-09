import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import '../models/task_data.dart';

String newTaskTitle = '';

class AddTaskScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
          color: Color(0xFF3F1C50),
          border: Border.all(width: 0, color: Color(0xFF3F1C50))),
      child: Container(
          decoration: BoxDecoration(
              color: Colors.white,
              borderRadius: BorderRadius.only(
                  topLeft: Radius.circular(32), topRight: Radius.circular(32))),
          height: 400,
          width: double.infinity,
          child: Padding(
            padding: const EdgeInsets.only(left: 70.0, right: 70.0, top: 56),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              mainAxisAlignment: MainAxisAlignment.start,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                TextField(
                  autofocus: true,
                  onChanged: (value) {
                    newTaskTitle = value;
                  },
                ),
                SizedBox(
                  height: 25,
                ),
                RawMaterialButton(
                  padding: EdgeInsets.all(10),
                  elevation: 0,
                  fillColor: Color(0xFF8A3DAE),
                  onPressed: () {
                    Provider.of<TaskData>(context, listen: false)
                        .addTask(newTaskTitle);
                    newTaskTitle = '';
                    Navigator.pop(context);
                  },
                  child: Text(
                    'ADD TASK',
                    style: TextStyle(
                        color: Colors.white,
                        fontWeight: FontWeight.bold,
                        fontSize: 16),
                  ),
                )
              ],
            ),
          )),
    );
  }
}
