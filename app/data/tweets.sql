
SELECT * FROM a01365286_user AS a INNER JOIN a01365286_user_timeline AS b ON b.user_id = a.ID;

SELECT a.user_name, b.post_desc FROM a01365286_user AS a INNER JOIN a01365286_user_timeline AS b ON b.user_id = a.ID;

SELECT a.user_name, b.post_date, b.post_desc, b.post_time, b.post_views FROM a01365286_user AS a INNER JOIN a01365286_user_timeline AS b ON b.user_id = a.ID;



INSERT INTO a01365286_user (ID, user_name, first_name, last_name, email, password)
VALUES (2, 'numberwan', 'will', 'wan', 'wwan@hotmail.com', 'abcdefg12');

INSERT INTO a01365286_user_timeline (ID, user_id, post_date, post_desc, post_time, post_views)
VALUES 
(6, 2, 'Nov 30, 2023', 'I like Gundam Seed more', '20:12', 10), 
(7, 2, 'Nov 30, 2023', 'I changed my mind. WFM is amazing', '21:02', 11),
(8, 2, 'Dec 01, 2023', 'Did you know there is a new Gundam Seed movie?', '07:11', 50),
(9, 2, 'Dec 11, 2023', 'I changed my mind again. WFM is best', '23:51', 21),
(10, 2, 'Dec 25, 2023', 'When movie for WFM?', '21:34', 100);

SELECT a.user_name, b.post_desc FROM a01365286_user AS a INNER JOIN a01365286_user_timeline AS b ON b.user_id = a.ID WHERE b.post_views > 90;

UPDATE a01365286_user_timeline
SET post_desc='I need season 3 NOW',
post_views = 66
WHERE ID = 5;