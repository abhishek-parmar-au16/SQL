<h2>Why use Primary Key</h2>

Here are the cons/benefits of using primary key:

The main aim of the primary key is to identify each and every record in the database table.
You can use a primary key when you do not allow someone to enter null values.
If you delete or update records, the action you specified will be undertaken to make sure data integrity.
Perform restrict operation to rejects delete or update operation for the parent table.
Data are organized in a sequence of clustered index whenever you physically organize DBMS table.


Why use Foreign Key?
Here are the important reasons of using foreign key:

Foreign keys help you to migrate entities using a primary key from the parent table.
A foreign key enables you to link two or more tables together.
It makes your database data consistent.
A foreign key can be used to match a column or combination of columns with primary key in a parent table.
SQL foreign key constraint is used to make sure the referential integrity of the data parent to match values in the child table.


FnWn4GLoL3KBhxaG


#Key Differnce


A primary key constrain is a column that uniquely identifies every row in the table of the relational database management system, while foreign key is a column that creates a relationship between two tables.

Primary Key never accepts null values whereas foreign key may accept multiple null values.

You can have only a single primary key in a table while you can have multiple foreign keys in a table.

The value of the primary key can't be removed from the parent table whereas the value of foreign key value can be removed from the child table.

No two rows can have any identical values for a primary key on the other hand a foreign key can contain duplicate values.

There is no limitation in inserting the values into the table column while inserting any value in the foreign key table, ensure that the value is present into a column of a primary key.