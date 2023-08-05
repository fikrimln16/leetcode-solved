# Write your MySQL query statement below

select employee_id, 
CASE
    WHEN employee_id%2 != 0 AND name NOT LIKE 'M%' THEN salary
    ELSE 0
END as bonus
FROM employees 
ORDER BY employee_id;