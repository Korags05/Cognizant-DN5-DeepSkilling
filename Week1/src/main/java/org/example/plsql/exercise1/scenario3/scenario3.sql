DO $$
DECLARE
    loan_rec RECORD;
BEGIN
    FOR loan_rec IN
        SELECT c.Name,
               l.LoanID,
               l.EndDate
        FROM Loans l
        JOIN Customers c
        ON l.CustomerID = c.CustomerID
        WHERE l.EndDate BETWEEN CURRENT_DATE
                            AND CURRENT_DATE + INTERVAL '30 days'
    LOOP
        RAISE NOTICE
        'Reminder: Loan % for customer % is due on %',
        loan_rec.LoanID,
        loan_rec.Name,
        loan_rec.EndDate;
    END LOOP;
END $$;