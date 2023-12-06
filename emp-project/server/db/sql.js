module.exports = {
  //전체조회 (값x) 오름차순 정렬, 10개씩 //현재 근무중인 사람만 조회 emp , dept , salary, departments 조인
  empList: `select e.emp_no, e.first_name, e.last_name, e.gender,e.hire_date,s.salary, d.dept_no, d.dept_name
  from employees e join dept_emp h on (e.emp_no = h.emp_no) join departments d on(h.dept_no = d.dept_no)
  join salaries s on (e.emp_no = s.emp_no)
  where h.to_date = cast('9999-01-01' as date)
  and s.to_date = cast('9999-01-01' as date)
  order by e.emp_no desc  
  limit 0,10`,

  //한건조회 (일반 값 1개 넘김 )
  empInfo: `select e.emp_no, e.first_name, e.last_name, e.gender,e.hire_date,s.salary, d.dept_no, d.dept_name
  from employees e join dept_emp h on ( e.emp_no = h.emp_no) join departments d on(h.dept_no = d.dept_no)
  join salaries s on (e.emp_no = s.emp_no)
  where h.to_date = cast('9999-01-01' as date)
  and s.to_date = cast('9999-01-01' as date)
  and e.emp_no =?`,

  //등록
  empInsert: `insert into employees set ?`, //(객체 1개 넘김)
  deptInsert: `insert into dept_emp set emp_no =?, dept_no =?, from_date =?, to_date=cast('9999-01-01' as date)`, //(일반 값 3개 넘김)
  salInsert: `insert into salaries set ?`, //(객체 1개 넘김)

  //직원정보수정 (객체 1개 , 일반값 1개 넘김)
  empUpdate: `update employees set ? where emp_no =?`,

  //삭제 (일반값 2개 넘김 )
  empDelete: `update dept_emp set to_date =? where emp_no =?`,

  //부서정보 조회 (값x)
  dept: `select dept_no, dept_name from departments order by dept_no`,
};
