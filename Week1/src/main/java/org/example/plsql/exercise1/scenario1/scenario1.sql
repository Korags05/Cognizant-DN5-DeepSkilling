DO $$
DECLARE
    cust RECORD;
BEGIN
    FOR cust IN
        SELECT CustomerID,
            EXTRACT(YEAR FROM AGE(CURRENT_DATE, DOB)) AS Age
        FROM Customers
    LOOP
        IF cust.Age > 60 THEN
            UPDATE Loans
            SET InterestRate = InterestRate - 1
            WHERE CustomerID = cust.CustomerID;

            RAISE NOTICE 'Discount applied for Customer ID %', cust.CustomerID;
        END IF;
    END LOOP;
END $$;