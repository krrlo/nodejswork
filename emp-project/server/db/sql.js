module.exports = {
  //전체조회
  empList: `select e.emp_no, e.first_name, e.last_name, e.gender,e.hire_date,s.salary, d.dept_no, d.dept_name
  from employees e join dept_emp h on ( e.emp_no = h.emp_no) join departments d on(h.dept_no = d.dept_no)
  join salaries s on (e.emp_no = s.emp_no)
  where h.to_date = cast('9999-01-01' as date)
  and s.to_date = cast('9999-01-01' as date)
  order by e.emp_no desc
  limit 0,10`,

  //한건조회 (컬럼 , 값1)
  empInfo: `select e.emp_no, e.first_name, e.last_name, e.gender,e.hire_date,s.salary, d.dept_no, d.dept_name
  from employees e join dept_emp h on ( e.emp_no = h.emp_no) join departments d on(h.dept_no = d.dept_no)
  join salaries s on (e.emp_no = s.emp_no)
  where h.to_date = cast('9999-01-01' as date)
  and s.to_date = cast('9999-01-01' as date)
  and e.emp_no =?`,

  //등록
  empInsert: `insert into employees set ?`, //(객체 , 값1)
  deptInsert: `insert into dept_emp set emp_no =?, dept_no =?, from_date=?, to_date=cast('9999-01-01' as date)`, //(컬럼 , 값3)
  salInsert: `insert into salaries set ?`,

  //직원정보수정 (값2)
  empUpdate: `update employees set ? where emp_no =?`,

  //삭제 (일반 값2 두개 들어감 )
  empDelete: `update dept_emp set to_date =? where emp_no =?`,

  //부서정보 조회
  dept: `select dept_no, dept_name from departments order by dept_no`,
};
