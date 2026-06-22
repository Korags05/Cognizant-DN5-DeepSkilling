CREATE OR REPLACE PROCEDURE TransferFunds(
    p_from_account INTEGER,
    p_to_account INTEGER,
    p_amount NUMERIC
)
LANGUAGE plpgsql
AS $$
DECLARE
    source_balance NUMERIC;
BEGIN
    SELECT Balance
    INTO source_balance
    FROM Accounts
    WHERE AccountID = p_from_account;

    IF source_balance < p_amount THEN
            RAISE EXCEPTION 'Insufficient balance';
    END IF;

    UPDATE Accounts
    SET Balance = Balance - p_amount
    WHERE AccountID = p_from_account;

    UPDATE Accounts
    SET Balance = Balance + p_amount
    WHERE AccountID = p_to_account;
END;
$$;