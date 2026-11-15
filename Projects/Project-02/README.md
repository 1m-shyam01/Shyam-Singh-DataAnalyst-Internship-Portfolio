# Project 2: SQL Sales Analysis

23 business questions answered with SQL: aggregation, grouping, HAVING and subqueries.

| | |
|---|---|
| **Source folder** | [`Task 2/sql_analysis.sql`](https://github.com/1m-shyam01/ApexPlanet-Data-Analytics-Internship/tree/main/Task%202) in the original repository |
| **Tools** | SQL |
| **Part of** | ApexPlanet Data Analytics Internship |

## Project objective
Answer core sales questions about totals, months, products, categories, cities and customers directly in SQL.

## Problem statement
Which products, categories, cities, months and customer groups drive sales, and how large is a typical order?

## Dataset description
The Task 1 dataset loaded into a table named `dataset` with 14 typed columns (VARCHAR, DATE, INT, NUMERIC) plus an `age_group` column added in the script.

## Tools and technologies
- SQL

## Methodology
1. Created the `dataset` table with typed columns.
2. Added an `age_group` column with ALTER TABLE and filled it with UPDATE ... CASE (18-25, 26-35, 36-45, 46-55, 56-65, 66+).
3. Wrote 23 commented business questions, each answered by one query.
4. Used scalar subqueries in HAVING to compare groups with an overall average.

## Key analysis performed
- Totals: sales, orders, quantity, average sales per order.
- Monthly sales and monthly order counts.
- Top 5 products by sales and by quantity; highest unit price; low-price high-sales products.
- Category, city, gender and age-group comparisons; average customer age.
- Above-average checks for products, months and cities using HAVING with a subquery.

## Important findings
- Total sales ₹139.40M from 1,000 orders; 5,435 units; average ₹1,39,399 per order.
- Top 5 products by sales: Laptop, Mobile, Book, Rice, Chair. Top by quantity: Mobile (1,008 units).
- Electronics is the top category (₹50.78M); Patna is the top city (₹19.29M, 135 orders).
- Male customers average ₹1,41,807 per order against ₹1,36,883 for female customers.
- Grocery has the highest average unit price (₹26,360).

## Project screenshots

No screenshots are available in the original repository for this project.

## Not available in the repository
The repository has the script only. Query outputs and the database engine used are not recorded, so the figures above were reproduced from the Task 1 dataset and match the Task 4 presentation.

## Repository link
[github.com/1m-shyam01/ApexPlanet-Data-Analytics-Internship](https://github.com/1m-shyam01/ApexPlanet-Data-Analytics-Internship/tree/main/Task%202)

[Back to the portfolio home](../../README.md)
