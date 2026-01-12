const employess =[
  {
  "employees": [
    {
      "id": 1,
      "email": "admin@example.com",
      "password": "123",
      "tasks": [
        {
          "taskId": 101,
          "title": "Review system logs",
          "description": "Check server and application logs for errors",
          "date": "2026-01-05",
          "category": "IT",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "taskId": 102,
          "title": "Approve employee leave",
          "description": "Review and approve pending leave requests",
          "date": "2026-01-04",
          "category": "HR",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "taskId": 103,
          "title": "Database backup",
          "description": "Create and verify full database backup",
          "date": "2026-01-03",
          "category": "Database",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        },
        {
          "taskId": 104,
          "title": "Add new employees",
          "description": "Add 5 new employees to the system",
          "date": "2026-01-06",
          "category": "Admin",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      ]
    },

    {
      "id": 2,
      "email": "rahul@company.com",
      "password": "rahul123",
      "tasks": [
        {
          "taskId": 201,
          "title": "Design homepage",
          "description": "Create UI for the homepage",
          "date": "2026-01-04",
          "category": "Design",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskId": 202,
          "title": "Fix login bug",
          "description": "Resolve login authentication issue",
          "date": "2026-01-03",
          "category": "Development",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "taskId": 203,
          "title": "Test payment gateway",
          "description": "Test payment module for bugs",
          "date": "2026-01-05",
          "category": "Testing",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        }
      ]
    },

    {
      "id": 3,
      "email": "sneha@company.com",
      "password": "sneha123",
      "tasks": [
        {
          "taskId": 301,
          "title": "Prepare project report",
          "description": "Create project status report",
          "date": "2026-01-06",
          "category": "Documentation",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskId": 302,
          "title": "Client meeting",
          "description": "Attend meeting with the client",
          "date": "2026-01-04",
          "category": "Meeting",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "taskId": 303,
          "title": "Collect requirements",
          "description": "Gather new requirements from client",
          "date": "2026-01-02",
          "category": "Analysis",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "taskId": 304,
          "title": "Update task tracker",
          "description": "Update Jira and task dashboard",
          "date": "2026-01-05",
          "category": "Management",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        }
      ]
    }
  ]
}

];

const admin =[ {
  "id": 1,
  "email": "admin@example.com",
  "password": "123"
}];

export const setLocalstorage = () =>{
    localStorage.setItem('employee',JSON.stringify(employess))
    localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalstorage = () =>{
   const employess = JSON.parse(localStorage.getItem("employess"))
   const admin = JSON.parse(localStorage.getItem("admin"))
   
   console.log(employess,admin);
   
}
