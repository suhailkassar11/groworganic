import{ useState } from 'react';
import { Box } from '@mui/material';


interface Department {
  id: number;
  name: string;
  subDepartments?: Department[];
}

const departmentData: Department[] = [
  {
    id: 1,
    name: 'customer_service',
    subDepartments: [
      { id: 11, name: 'support' },
      { id: 12, name: 'customer_success' },
    ],
  },
  {
    id: 2,
    name: 'Design',
    subDepartments: [
      { id: 21, name: 'graphic_design' },
      { id: 22, name: 'product_design' },
      { id: 23, name: 'web_design' },
    ],
  },
];

const DepartmentList= () => {
    const [checkedDepartments, setCheckedDepartments] = useState<number[]>([]);
    const [expandedDepartments, setExpandedDepartments] = useState<number[]>([]);
  
    const handleToggleDepartment = (departmentId: number) => {
      setCheckedDepartments((prev) =>
        prev.includes(departmentId)
          ? prev.filter((id) => id !== departmentId)
          : [...prev, departmentId, ...(departmentData.find((dep) => dep.id === departmentId)?.subDepartments?.map((subDep) => subDep.id) || [])]
      );
  
      setExpandedDepartments((prev) =>
        prev.includes(departmentId)
          ? prev.filter((id) => id !== departmentId)
          : [...prev, departmentId]
      );
    };
  
    const isDepartmentChecked = (departmentId: number) => checkedDepartments.includes(departmentId);
    const isDepartmentExpanded = (departmentId: number) => expandedDepartments.includes(departmentId);
  
    return (        
    <Box className="p-3">
        <h2 className='text-3xl font-bold'>Departments</h2>
      <ul className=''>
        {departmentData.map((department) => (
          <li key={department.id}>
            <input
              type="checkbox"
              checked={isDepartmentChecked(department.id)}
              onChange={() => handleToggleDepartment(department.id)}
            />
            {department.name}
            {department.subDepartments && (
              <button className='px-2 text-3xl text-center' onClick={() => setExpandedDepartments((prev) => [...prev, department.id])}>
                {isDepartmentExpanded(department.id) ? '-' : '+'}
              </button>
            )}
            <div>
            {isDepartmentExpanded(department.id) && department.subDepartments && (
              <ul className='p-3'>
                {department.subDepartments.map((subDepartment) => (
                    <li key={subDepartment.id}>
                    <input
                      type="checkbox"
                      checked={isDepartmentChecked(subDepartment.id)}
                      onChange={() => handleToggleDepartment(subDepartment.id)}
                    />
                    {subDepartment.name}
                  </li>
                ))}
              </ul>
            )}
            </div>
          </li>
        ))}
      </ul>
    </Box>
    );
};

export default DepartmentList;