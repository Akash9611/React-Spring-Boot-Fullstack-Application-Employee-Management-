// Impl package/folder stands for implementation
package com.employee.empManagement.service.impl;

import com.employee.empManagement.dto.EmployeeDto;
import com.employee.empManagement.entity.Employee;
import com.employee.empManagement.mapper.EmployeeMapper;
import com.employee.empManagement.repository.EmployeeRepository;
import com.employee.empManagement.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

    private EmployeeRepository employeeRepository;

    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {

        Employee employee = EmployeeMapper.mapToEmployee(employeeDto);
        Employee savedEmployee = employeeRepository.save(employee);
        return EmployeeMapper.mapToEmployeeDto(savedEmployee);
    }
}
