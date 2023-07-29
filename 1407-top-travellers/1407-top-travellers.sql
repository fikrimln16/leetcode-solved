SELECT u.name, sum(IF(distance is NULL,0,distance)) as travelled_distance
FROM Users u
LEFT JOIN Rides r ON u.id = r.user_id
GROUP BY u.id
ORDER BY travelled_distance DESC, u.name ASC; 
