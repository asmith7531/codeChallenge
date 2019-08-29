var dbConnection = SQL.connect({
  Driver: "MySQL",
  Host: "localhost",
  Port: 3306,
  Database: "university",
  UserName: "admin",
  Password: "111"
});
function studentsPerDept() {
  var totals = dbConnection.query(
    "SELECT COUNT(*), dept_ID FROM Students\
    GROUP BY dept_ID\
    INNER JOIN Departments ON Students.dept_ID = Departments.dept_ID\
    ORDER BY COUNT(students.dept_id) ASC"
  );
  return totals;
}

dbConnection.close();
