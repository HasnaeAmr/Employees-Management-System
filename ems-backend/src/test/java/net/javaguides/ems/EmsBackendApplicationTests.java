package net.javaguides.ems;

import net.javaguides.ems.service.EmployeeService;
import net.javaguides.ems.repository.EmployeeRepository;
import net.javaguides.ems.model.Employee;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

class EmployeeServiceTest {

    @Mock
    private EmployeeRepository employeeRepository;

    @InjectMocks
    private EmployeeService employeeService;

    private Employee employee;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        employee = new Employee(1, "John Doe", "Software Engineer", "john.doe@example.com");
    }

    @Test
    void testGetEmployeeById() {
        // Given
        when(employeeRepository.findById(1)).thenReturn(java.util.Optional.of(employee));

        // When
        Employee foundEmployee = employeeService.getEmployeeById(1);

        // Then
        assertNotNull(foundEmployee);
        assertEquals("John Doe", foundEmployee.getName());
    }

    @Test
    void testEmployeeNotFound() {
        // Given
        when(employeeRepository.findById(1)).thenReturn(java.util.Optional.empty());

        // When
        Employee foundEmployee = employeeService.getEmployeeById(1);

        // Then
        assertNull(foundEmployee);
    }
}
