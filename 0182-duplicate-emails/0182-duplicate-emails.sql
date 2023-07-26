# Write your MySQL query statement below
SELECT email
FROM Person
GROUP BY email
HAVING count(email) > 1