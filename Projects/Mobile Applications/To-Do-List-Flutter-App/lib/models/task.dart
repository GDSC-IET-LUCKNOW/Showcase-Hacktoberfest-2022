class Task {
  String title;
  bool isChecked;

  Task({required this.title, this.isChecked = false});

  void toggleCheck() {
    isChecked = !isChecked;
  }
}
