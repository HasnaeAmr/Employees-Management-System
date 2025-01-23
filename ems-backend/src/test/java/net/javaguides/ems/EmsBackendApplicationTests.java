package net.javaguides.ems;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.ApplicationContext;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@SpringBootTest
class EmsBackendApplicationTests {

    @Autowired
    private ApplicationContext context;

    @Test
    void contextLoads() {
        // Ensuring the application context is loaded
        assertNotNull(context, "Application context should not be null");
    }

    @Test
    void testServiceLayer() {
        // Example: Check if a service bean exists
        assertNotNull(context.getBean(YourServiceClass.class), "Service bean should be loaded");
    }

    @Test
    void testControllerLayer() {
        // Example: Check if a controller bean exists
        assertNotNull(context.getBean(YourControllerClass.class), "Controller bean should be loaded");
    }
}
