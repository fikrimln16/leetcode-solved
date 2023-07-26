# Write your MySQL query statement below

SELECT u.name, SUM(amount) as 'balance'
FROM Transactions t
JOIN Users u ON t.account = u.account
GROUP BY t.account
HAVING balance > 10000