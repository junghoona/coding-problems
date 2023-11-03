# +-------------+---------+
# | Column Name | Type    |
# +-------------+---------+
# | id          | int     |
# | name        | varchar |
# | referee_id  | int     |
# +-------------+---------+
# In SQL, id is the primary key column for this table.
# Each row of this table indicates the id of a customer, their name, and the id of the customer who referred them.


# Example 1:

# Input:
# Customer table:
# +----+------+------------+
# | id | name | referee_id |
# +----+------+------------+
# | 1  | Will | null       |
# | 2  | Jane | null       |
# | 3  | Alex | 2          |
# | 4  | Bill | null       |
# | 5  | Zack | 1          |
# | 6  | Mark | 2          |
# +----+------+------------+
# Output:
# +------+
# | name |
# +------+
# | Will |
# | Jane |
# | Bill |
# | Zack |
# +------+

"""
SELECT name
FROM Customer
WHERE referee_id is null OR referee_id != 2;
"""
