DO $$
DECLARE
    cust RECORD;
BEGIN
    FOR cust IN
        SELECT CustomerID, Balance
        FROM Customers
    LOOP
        IF cust.Balance > 10000 THEN
            UPDATE Customers
            SET IsVIP = TRUE
            WHERE CustomerID = cust.CustomerID;

            RAISE NOTICE 'Customer % promoted to VIP', cust.CustomerID;
        END IF;
    END LOOP;
END $$;