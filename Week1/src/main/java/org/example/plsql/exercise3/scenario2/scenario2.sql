CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(
    p_department VARCHAR,
    p_bonus_percent NUMERIC
)
LANGUAGE plpgsql
AS $$
BEGIN
    UPDATE Employees
    SET Salary = Salary + (Salary * p_bonus_percent / 100)
    WHERE Department = p_department;
END;
$$;