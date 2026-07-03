package org.example.TDD;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class CalculatorAAATest {

    private Calculator calculator;

    @Before
    public void setUp() {
        calculator = new Calculator();
        System.out.println("Setup executed");
    }

    @After
    public void tearDown() {
        System.out.println("Teardown executed");
    }

    @Test
    public void testAddition() {

        // Arrange
        int a = 10;
        int b = 20;

        // Act
        int result = calculator.add(a, b);

        // Assert
        assertEquals(30, result);
    }

    @Test
    public void testSubtraction() {

        // Arrange
        int a = 20;
        int b = 5;

        // Act
        int result = calculator.subtract(a, b);

        // Assert
        assertEquals(15, result);
    }
}