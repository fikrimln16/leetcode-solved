# Write your MySQL query statement below

SELECT ifnull(
(SELECT num
FROM MyNumbers
GROUP BY num
HAVING count(*)=1
ORDER BY num DESC limit 1),null) AS num  